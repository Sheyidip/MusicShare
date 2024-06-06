
export const getGoogleAuthURL = () => {
    const clientId = '1081477315392-qh7k6gqn95pgvvupf1f058tackfld2jg.apps.googleusercontent.com';
    const redirectUri = 'http://localhost:3000/callback';
    const scopes = 'https://www.googleapis.com/auth/youtube.readonly';
    const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?response_type=code&client_id=${clientId}&redirect_uri=${encodeURIComponent(redirectUri)}&scope=${encodeURIComponent(scopes)}&access_type=offline&prompt=consent`;
    return authUrl;
  };
  
  export const getGoogleAccessToken = async (code) => {
    const clientId = '1081477315392-qh7k6gqn95pgvvupf1f058tackfld2jg.apps.googleusercontent.com';
    const clientSecret = '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';
    const redirectUri = 'http://localhost:3000/callback';
  
    const response = await fetch('https://oauth2.googleapis.com/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: new URLSearchParams({
        code,
        client_id: clientId,
        client_secret: clientSecret,
        redirect_uri: redirectUri,
        grant_type: 'authorization_code'
      })
    });
  
    const data = await response.json();
    return data.access_token;
  };
  