const { getSpotifyAuthUrl, getGoogleAuthUrl, getSpotifyAccessToken, getGoogleAccessToken } = require('../services/authService');

exports.spotifyLogin = (req, res) => {
  const authUrl = getSpotifyAuthUrl();
  res.redirect(authUrl);
};

exports.googleLogin = (req, res) => {
  const authUrl = getGoogleAuthUrl();
  res.redirect(authUrl);
};

exports.spotifyCallback = async (req, res) => {
    try {
      const { code } = req.query;
      const token = await getSpotifyAccessToken(code);
      res.redirect(`http://localhost:5173/callback?token=${token}`);
    } catch (error) {
      console.error('Error getting Spotify access token:', error);
      res.status(500).send('Error getting Spotify access token');
    }
  };
  
  exports.googleCallback = async (req, res) => {
    try {
      const { code } = req.query;
      const token = await getGoogleAccessToken(code);
      res.redirect(`http://localhost:5173/YOUTUBE?token=${token}`);
    } catch (error) {
      console.error('Error getting Google access token:', error);
      res.status(500).send('Error getting Google access token');
    }
  };
  
