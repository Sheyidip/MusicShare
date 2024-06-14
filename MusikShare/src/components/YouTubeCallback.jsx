import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getGoogleAccessToken } from '../api/googleAuth'; // Ensure the path is correct

const YouTubeCallback = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const code = searchParams.get('code');

    if (code) {
      getGoogleAccessToken(code)
        .then((token) => {
          localStorage.setItem('googleAccessToken', token);
          navigate('/import');
        })
        .catch((error) => {
          console.error('Error getting Google access token:', error);
        });
    }
  }, [navigate]);

  return <div>Loading...</div>;
};

export default YouTubeCallback;
