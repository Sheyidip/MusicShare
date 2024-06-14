import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getSpotifyAccessToken } from '../api/spotifyAuth'; // Ensure the path is correct

const SpotifyCallback = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const code = searchParams.get('code');

    if (code) {
      getSpotifyAccessToken(code)
        .then((token) => {
          localStorage.setItem('spotifyAccessToken', token);
          navigate('/import');
        })
        .catch((error) => {
          console.error('Error getting Spotify access token:', error);
        });
    }
  }, [navigate]);

  return <div>Loading...</div>;
};

export default SpotifyCallback;
