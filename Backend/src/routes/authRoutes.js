const express = require('express');
const router = express.Router();
const { spotifyLogin, googleLogin, spotifyCallback, googleCallback } = require('../controllers/authController');

router.get('/spotify/login', spotifyLogin);
router.get('/youtube/login', googleLogin);
router.get('/spotify/callback', spotifyCallback);
router.get('/youtube/callback', googleCallback);

module.exports = router;
