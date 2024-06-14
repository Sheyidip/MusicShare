// src/components/PlaylistImport.jsx
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import './PlaylistImport.css';

const handleSpotifyLogin = () => {
  window.location.href = 'http://localhost:5173/spotify/login';
};

const handleGoogleLogin = () => {
  window.location.href = 'http://localhost:5173/youtube/login';
};

const PlaylistImport = ({ onImport }) => {
  const [spotifyToken, setSpotifyToken] = useState(localStorage.getItem('spotifyAccessToken'));
  const [googleToken, setGoogleToken] = useState(localStorage.getItem('googleAccessToken'));

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get('token');
    if (window.location.pathname === '/spotify/callback') {
      setSpotifyToken(token);
      localStorage.setItem('spotifyAccessToken', token);
      window.history.replaceState({}, document.title, '/'); 
    } else if (window.location.pathname === '/YOUTUBE') {
      setGoogleToken(token);
      localStorage.setItem('googleAccessToken', token);
      window.history.replaceState({}, document.title, '/'); 
    }
  }, []);

  useEffect(() => {
    if (spotifyToken) {
      axios.get(`http://localhost:5173/spotify/playlists?token=${spotifyToken}`)
        .then(response => {
          onImport(response.data.items.map(playlist => ({
            ...playlist,
            service: 'spotify',
          })));
        })
        .catch(error => {
          console.error('Error fetching Spotify playlists:', error);
        });
    }

    if (googleToken) {
      axios.get(`http://localhost:5173/youtube/playlists?token=${googleToken}`)
        .then(response => {
          onImport(response.data.items.map(playlist => ({
            id: playlist.id,
            name: playlist.snippet.title,
            service: 'youtube',
          })));
        })
        .catch(error => {
          console.error('Error fetching YouTube playlists:', error);
        });
    }
  }, [spotifyToken, googleToken, onImport]);

  return (
    <div className="importPageContainer">
      <h2>Import Your Playlists</h2>
      <div className="authButtons">
        <button onClick={handleSpotifyLogin} className="spotifyBtn">Login with Spotify</button>
        <button onClick={handleGoogleLogin} className="googleBtn">Login with Google</button>
      </div>
    </div>
  );
};

PlaylistImport.propTypes = {
  onImport: PropTypes.func.isRequired,
};

export default PlaylistImport;
