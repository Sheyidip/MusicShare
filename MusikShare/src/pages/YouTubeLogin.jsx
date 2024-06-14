import React from 'react';
import { getGoogleAuthURL } from '../api/googleAuth'; // Ensure the path is correct

const YouTubeLogin = () => {
  const handleGoogleLogin = () => {
    window.location.href = getGoogleAuthURL();
  };

  return (
    <div className="youtubeLoginContainer">
      <h2>Login with Google</h2>
      <button onClick={handleGoogleLogin}>Login with Google</button>
    </div>
  );
};

export default YouTubeLogin;
