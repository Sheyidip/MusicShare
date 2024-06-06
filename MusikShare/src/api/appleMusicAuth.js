
const clientId = 'YOUR_APPLE_MUSIC_CLIENT_ID';
const clientSecret = 'YOUR_APPLE_MUSIC_CLIENT_SECRET';
const redirectUri = 'YOUR_APPLE_MUSIC_REDIRECT_URI';

export const getAppleMusicAuthURL = () => {
  const authUrl = `https://appleid.apple.com/auth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=code&scope=music`;
  return authUrl;
};

export const getAppleMusicAccessToken = async (code) => {
  const response = await fetch('https://appleid.apple.com/auth/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: `client_id=${clientId}&client_secret=${clientSecret}&code=${code}&grant_type=authorization_code&redirect_uri=${redirectUri}`,
  });

  const data = await response.json();
  return data.access_token;
};
