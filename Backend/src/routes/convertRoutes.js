const express = require('express');
const router = express.Router();
const { convertPlaylist } = require('../controllers/convertController');

router.post('/', convertPlaylist);

module.exports = router;
