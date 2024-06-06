const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios');
const { google } = require('googleapis');
const SpotifyWebApi = require('spotify-web-api-node');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

const spotifyApi = new SpotifyWebApi({
  clientId: process.env.SPOTIFY_CLIENT_ID,
  clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
});

const oauth2Client = new google.auth.OAuth2(
  process.env.YOUTUBE_CLIENT_ID,
  process.env.YOUTUBE_CLIENT_SECRET,
  'http://localhost:5173/callback'  // Set your redirect URI
);

google.options({ auth: oauth2Client });

app.post('/api/convert', async (req, res) => {
  const { sourceService, targetService, playlist } = req.body;

  try {
    const convertedPlaylist = await convertPlaylist(sourceService, targetService, playlist);
    res.json(convertedPlaylist);
  } catch (error) {
    console.error('Error converting playlist:', error);
    res.status(500).send('Error converting playlist');
  }
});

async function convertPlaylist(sourceService, targetService, playlist) {
  if (sourceService === 'spotify' && targetService === 'youtube') {
    const accessToken = await getSpotifyAccessToken();
    spotifyApi.setAccessToken(accessToken);

    const tracks = await Promise.all(
      playlist.map(async (track) => {
        const trackDetails = await spotifyApi.getTrack(track.id);
        return {
          title: trackDetails.body.name,
          artist: trackDetails.body.artists[0].name,
        };
      })
    );

    const youtubeTracks = await Promise.all(
      tracks.map(async (track) => {
        const query = `${track.title} ${track.artist}`;
        const youtubeTrack = await searchYouTube(query);
        return youtubeTrack;
      })
    );

    return youtubeTracks;
  }

  return playlist.map(track => ({
    title: track.title,
    artist: track.artist,
  }));
}

async function getSpotifyAccessToken() {
  const data = await spotifyApi.clientCredentialsGrant();
  return data.body.access_token;
}

async function searchYouTube(query) {
  const youtube = google.youtube('v3');
  const response = await youtube.search.list({
    part: 'snippet',
    q: query,
    maxResults: 1,
    type: 'video'
  });

  const video = response.data.items[0];
  if (video) {
    return {
      title: video.snippet.title,
      videoId: video.id.videoId,
      channelTitle: video.snippet.channelTitle,
    };
  }

  return null;
}

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
