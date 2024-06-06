const SpotifyWebApi = require('spotify-web-api-node');

const spotifyApi = new SpotifyWebApi({
  clientId: process.env.SPOTIFY_CLIENT_ID,
  clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
});

async function getSpotifyAccessToken() {
  const data = await spotifyApi.clientCredentialsGrant();
  return data.body.access_token;
}

module.exports = { getSpotifyAccessToken };
