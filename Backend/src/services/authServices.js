const axios = require('axios');
const querystring = require('querystring');

const getSpotifyAuthUrl = () => {
  const params = querystring.stringify({
    client_id: process.env.SPOTIFY_CLIENT_ID,
    response_type: 'code',
    redirect_uri: process.env.SPOTIFY_REDIRECT_URI,
    scope: 'playlist-read-private',
  });
  return `https://accounts.spotify.com/authorize?${params}`;
};

const getGoogleAuthUrl = () => {
  const params = querystring.stringify({
    client_id: process.env.GOOGLE_CLIENT_ID,
    response_type: 'code',
    redirect_uri: process.env.GOOGLE_REDIRECT_URI,
    scope: 'https://www.googleapis.com/auth/youtube.readonly',
  });
  return `https://accounts.google.com/o/oauth2/auth?${params}`;
};

const getSpotifyAccessToken = async (code) => {
  const response = await axios.post('https://accounts.spotify.com/api/token', querystring.stringify({
    grant_type: 'authorization_code',
    code,
    redirect_uri: process.env.SPOTIFY_REDIRECT_URI,
    client_id: process.env.SPOTIFY_CLIENT_ID,
    client_secret: process.env.SPOTIFY_CLIENT_SECRET,
  }), {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  });
  return response.data.access_token;
};

const getGoogleAccessToken = async (code) => {
  const response = await axios.post('https://oauth2.googleapis.com/token', querystring.stringify({
    grant_type: 'authorization_code',
    code,
    redirect_uri: process.env.GOOGLE_REDIRECT_URI,
    client_id: process.env.GOOGLE_CLIENT_ID,
    client_secret: process.env.GOOGLE_CLIENT_SECRET,
  }), {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  });
  return response.data.access_token;
};

module.exports = { getSpotifyAuthUrl, getGoogleAuthUrl, getSpotifyAccessToken, getGoogleAccessToken };
