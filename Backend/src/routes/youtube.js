const express = require('express');
const axios = require('axios');
const router = express.Router();

const CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;
const REDIRECT_URI = process.env.GOOGLE_REDIRECT_URI;

router.get('/login', (req, res) => {
  const scope = 'https://www.googleapis.com/auth/youtube.readonly';
  const authUrl = `https://accounts.google.com/o/oauth2/auth?client_id=${CLIENT_ID}&response_type=code&redirect_uri=${encodeURIComponent(REDIRECT_URI)}&scope=${scope}&access_type=offline`;
  res.redirect(authUrl);
});

router.get('/callback', async (req, res) => {
  const code = req.query.code;

  try {
    const response = await axios.post('https://oauth2.googleapis.com/token', {
      code,
      client_id: CLIENT_ID,
      client_secret: CLIENT_SECRET,
      redirect_uri: REDIRECT_URI,
      grant_type: 'authorization_code',
    });

    const { access_token } = response.data;
    res.redirect(`http://localhost:5173/YOUTUBE?token=${access_token}`);
  } catch (error) {
    console.error('Error getting Google access token:', error);
    res.status(500).send('Internal Server Error');
  }
});

router.get('/playlists', async (req, res) => {
  const token = req.query.token;

  try {
    const response = await axios.get('https://www.googleapis.com/youtube/v3/playlists?part=snippet&mine=true', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    res.json(response.data);
  } catch (error) {
    console.error('Error fetching YouTube playlists:', error);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;
