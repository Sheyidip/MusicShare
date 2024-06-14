const express = require('express');
const dotenv = require('dotenv');
const spotifyRoutes = require('./src/routes/spotify');
const youtubeRoutes = require('./src/routes/youtube');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use('/spotify', spotifyRoutes);
app.use('/youtube', youtubeRoutes);

app.get('/', (req, res) => {
  res.send('Playlist Converter Backend');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
