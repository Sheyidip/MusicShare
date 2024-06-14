// SpotifyLogin.jsx

import React from 'react';
import { getSpotifyAuthURL } from '../api/spotifyAuth';

const SpotifyLogin = () => {
  const handleSpotifyLogin = () => {
    const authURL = getSpotifyAuthURL();
    window.location.href = authURL;
  };

  return (
    <div>
      <h2>Login with Spotify</h2>
      <button onClick={handleSpotifyLogin}>Login with Spotify</button>
    </div>
  );
};

export default SpotifyLogin;
