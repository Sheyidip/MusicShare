
export const getSpotifyAuthURL = () => {
    const clientId = '3da747b6b6624e23ab53b38ba846883f';
    const redirectUri = 'http://localhost:5173/callback';
    const scopes = 'user-read-private user-read-email playlist-read-private';
    const authUrl = `https://accounts.spotify.com/authorize?response_type=code&client_id=${clientId}&scope=${encodeURIComponent(scopes)}&redirect_uri=${encodeURIComponent(redirectUri)}`;
    return authUrl;
  };
  
  export const getSpotifyAccessToken = async (code) => {
    const clientId = '3da747b6b6624e23ab53b38ba846883f';
    const clientSecret = 'a7ea7b7790f14746882df4b6cc274ad8';
    const redirectUri = 'http://localhost:5173/callback';
  
    const response = await fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: 'Basic ' + btoa(`${clientId}:${clientSecret}`)
      },
      body: new URLSearchParams({
        grant_type: 'authorization_code',
        code,
        redirect_uri: redirectUri,
      })
    });
  
    const data = await response.json();
    return data.access_token;
  };
  