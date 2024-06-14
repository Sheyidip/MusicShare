import axios from 'axios';

export const getSpotifyAuthURL = () => {
  const clientId = import.meta.env.VITE_SPOTIFY_CLIENT_ID;
  console.log('Spotify Client ID:', import.meta.env.VITE_SPOTIFY_CLIENT_ID);
  const redirectUri = import.meta.env.VITE_SPOTIFY_REDIRECT_URI;
  const scope = 'playlist-read-private';

  return `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=code&redirect_uri=${encodeURIComponent(redirectUri)}&scope=${scope}`;
};

export const getSpotifyAccessToken = async (code) => {
  const response = await axios.post('https://accounts.spotify.com/api/token', null, {
    params: {
      grant_type: 'authorization_code',
      code: code,
      redirect_uri: import.meta.env.VITE_SPOTIFY_REDIRECT_URI,
      client_id: import.meta.env.VITE_SPOTIFY_CLIENT_ID,
      client_secret: import.meta.env.VITE_SPOTIFY_CLIENT_SECRET,
    },
    headers: {
      Authorization: `Basic ${Buffer.from(`${clientId}:${clientSecret}`).toString('base64')}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    
  });
  return response.data.access_token;
};
