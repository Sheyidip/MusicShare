import axios from 'axios';

export const getGoogleAuthURL = () => {
  const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;
  console.log('Google Client ID:', import.meta.env.VITE_GOOGLE_CLIENT_ID);
  const redirectUri = import.meta.env.VITE_GOOGLE_REDIRECT_URI;
  const scope = 'https://www.googleapis.com/auth/youtube.readonly';

  return `https://accounts.google.com/o/oauth2/auth?client_id=${clientId}&response_type=code&redirect_uri=${encodeURIComponent(redirectUri)}&scope=${scope}&access_type=offline`;
};

export const getGoogleAccessToken = async (code) => {
  const response = await axios.post('https://oauth2.googleapis.com/token', null, {
    params: {
      code: code,
      client_id: import.meta.env.VITE_GOOGLE_CLIENT_ID,
      client_secret: import.meta.env.VITE_GOOGLE_CLIENT_SECRET,
      redirect_uri: import.meta.env.VITE_GOOGLE_REDIRECT_URI,
      grant_type: 'authorization_code',
    },
  });
  return response.data.access_token;
};
