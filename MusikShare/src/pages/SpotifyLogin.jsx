import React from 'react';
import { getSpotifyAuthURL } from '../api/spotifyAuth'; // Ensure the path is correct

const SpotifyLogin = () => {
  const handleSpotifyLogin = () => {
    window.location.href = getSpotifyAuthURL();
  };

  return (
    <div className="spotifyLoginContainer">
      <h2>Login with Spotify</h2>
      <button onClick={handleSpotifyLogin}>Login with Spotify</button>
    </div>
  );
};

export default SpotifyLogin;
