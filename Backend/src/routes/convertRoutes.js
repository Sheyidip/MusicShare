const express = require('express');
const router = express.Router();
const { convertPlaylist } = require('../controllers/convertControllers');

router.post('/', convertPlaylist);

module.exports = router;
