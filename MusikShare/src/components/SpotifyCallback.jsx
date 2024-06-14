import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getSpotifyAccessToken } from '../api/spotifyAuth';

const SpotifyCallback = () => {
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const code = params.get('code');

    if (code) {
      getSpotifyAccessToken(code)
        .then(accessToken => {
          // Handle accessToken (e.g., store it in localStorage)
          console.log('Spotify access token:', accessToken);
        })
        .catch(error => {
          console.error('Error getting Spotify access token:', error);
        });
    } else {
      console.error('No authorization code found.');
    }
  }, [location.search]);

  return (
    <div>
      <p>Processing Spotify callback...</p>
    </div>
  );
};

export default SpotifyCallback;
