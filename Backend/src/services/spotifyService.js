/*const SpotifyWebApi = require('spotify-web-api-node');
const { getSpotifyAccessToken } = require('../utils/getSpotifyAccessToken');

const spotifyApi = new SpotifyWebApi({
  clientId: process.env.SPOTIFY_CLIENT_ID,
  clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
});

async function getSpotifyTrackDetails(trackId) {
  const accessToken = await getSpotifyAccessToken();
  spotifyApi.setAccessToken(accessToken);

  const trackDetails = await spotifyApi.getTrack(trackId);
  return {
    title: trackDetails.body.name,
    artist: trackDetails.body.artists[0].name,
  };
}

module.exports = { getSpotifyTrackDetails };*/