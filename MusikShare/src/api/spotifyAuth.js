import axios from 'axios';

export const getSpotifyAuthURL = () => {
  const clientId = import.meta.env.VITE_SPOTIFY_CLIENT_ID;
  const redirectUri = import.meta.env.VITE_SPOTIFY_REDIRECT_URI;
  const scope = 'playlist-read-private';

  return `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=code&redirect_uri=${encodeURIComponent(redirectUri)}&scope=${scope}`;
};

export const getSpotifyAccessToken = async (code) => {
  const clientId = import.meta.env.VITE_SPOTIFY_CLIENT_ID;
  const clientSecret = import.meta.env.VITE_SPOTIFY_CLIENT_SECRET;
  const redirectUri = import.meta.env.VITE_SPOTIFY_REDIRECT_URI;

  const authHeader = btoa(`${clientId}:${clientSecret}`);
  const formData = new URLSearchParams();
  console.log('Auth Header:', authHeader);
console.log('Form Data:', formData.toString());
  formData.append('grant_type', 'authorization_code');
  formData.append('code', code);
  formData.append('redirect_uri', redirectUri);

  try {
    const response = await axios.post(
      'https://accounts.spotify.com/api/token',
      formData,
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Authorization': `Basic ${authHeader}`,
        },
      }
    );

    return response.data.access_token;
  } catch (error) {
    console.error('Error getting Spotify access token:', error);
    throw error; // Optionally handle or rethrow the error
  }
};
