const { convertPlaylist } = require('../services/convertService');

exports.convertPlaylist = async (req, res) => {
  const { sourceService, targetService, playlist } = req.body;

  try {
    const convertedPlaylist = await convertPlaylist(sourceService, targetService, playlist);
    res.json(convertedPlaylist);
  } catch (error) {
    console.error('Error converting playlist:', error);
    res.status(500).send('Error converting playlist');
  }
};
