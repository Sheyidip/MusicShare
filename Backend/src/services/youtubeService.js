/*const axios = require('axios');

async function searchYouTubeTrack(title, artist) {
  const client_id = process.env.YOUTUBE_CLIENT_ID;
  const client_secret = process.env.YOUTUBE_CLIENT_SECRET;
  const query = `${title} ${artist}`;
  const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(query)}&key=${apiKey}`;

  const response = await axios.get(url);
  const video = response.data.items[0];

  return {
    title: video.snippet.title,
    videoId: video.id.videoId,
  };
}

module.exports = { searchYouTubeTrack };*/
