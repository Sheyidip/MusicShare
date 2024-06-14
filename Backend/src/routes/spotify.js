const express = require('express');
const axios = require('axios');
const router = express.Router();

const CLIENT_ID = process.env.SPOTIFY_CLIENT_ID;
const CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET;
const REDIRECT_URI = process.env.SPOTIFY_REDIRECT_URI;

router.get('/login', (req, res) => {
  const scope = 'playlist-read-private';
  const authUrl = `https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&response_type=code&redirect_uri=${encodeURIComponent(REDIRECT_URI)}&scope=${scope}`;
  res.redirect(authUrl);
});

router.get('/callback', async (req, res) => {
  const code = req.query.code;

  try {
    const response = await axios.post('https://accounts.spotify.com/api/token', new URLSearchParams({
      grant_type: 'authorization_code',
      code,
      redirect_uri: REDIRECT_URI,
      client_id: CLIENT_ID,
      client_secret: CLIENT_SECRET,
    }).toString(), {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });

    const { access_token } = response.data;
    res.redirect(`http://localhost:5173/callback?token=${access_token}`);
  } catch (error) {
    console.error('Error getting Spotify access token:', error);
    res.status(500).send('Internal Server Error');
  }
});

router.get('/playlists', async (req, res) => {
  const token = req.query.token;

  try {
    const response = await axios.get('https://api.spotify.com/v1/me/playlists', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    res.json(response.data);
  } catch (error) {
    console.error('Error fetching Spotify playlists:', error);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;
