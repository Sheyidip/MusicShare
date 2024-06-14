// src/components/PlaylistConvert.jsx
import React from 'react';
import PropTypes from 'prop-types';
import './PlaylistConvert.css';

const PlaylistConvert = ({ sourceService, targetService, playlists, onConvert }) => {
  const handleConvert = (playlistId) => {
    onConvert(playlistId, targetService);
  };

  return (
    <div className="playlistConvertWrapper">
      <h3>Select a playlist to convert from {sourceService} to {targetService}</h3>
      <ul>
        {playlists.map(playlist => (
          <li key={playlist.id}>
            {playlist.name} 
            <button onClick={() => handleConvert(playlist.id)}>Convert</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

PlaylistConvert.propTypes = {
  sourceService: PropTypes.string.isRequired,
  targetService: PropTypes.string.isRequired,
  playlists: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    service: PropTypes.string.isRequired,
  })).isRequired,
  onConvert: PropTypes.func.isRequired,
};

export default PlaylistConvert;
