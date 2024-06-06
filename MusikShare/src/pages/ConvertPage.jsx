// src/pages/ConvertPage.jsx
import React, { useState } from 'react';
import PlaylistConvert from '../components/PlaylistConvert';
import './ConvertPage.css';

const ConvertPage = () => {
  const [sourceService, setSourceService] = useState('');
  const [targetService, setTargetService] = useState('');
  const [playlist, setPlaylist] = useState(null);

  const handleSourceServiceChange = (e) => {
    setSourceService(e.target.value);
  };

  const handleTargetServiceChange = (e) => {
    setTargetService(e.target.value);
  };

  const handlePlaylistImport = (importedPlaylist) => {
    setPlaylist(importedPlaylist);
  };

  return (
    <div className="convertPageWrapper">
      <div className="convertPageContainer">
        <h2>Convert Your Playlist</h2>
        <div className="serviceSelection">
          <label>
            Source Service:
            <select value={sourceService} onChange={handleSourceServiceChange}>
              <option value="">Select a service</option>
              <option value="spotify">Spotify</option>
              <option value="youtube">YouTube Music</option>
            </select>
          </label>
          <label>
            Target Service:
            <select value={targetService} onChange={handleTargetServiceChange}>
              <option value="">Select a service</option>
              <option value="spotify">Spotify</option>
              <option value="youtube">YouTube Music</option>
            </select>
          </label>
        </div>
        {playlist && (
          <PlaylistConvert
            sourceService={sourceService}
            targetService={targetService}
            playlist={playlist}
          />
        )}
      </div>
    </div>
  );
};

export default ConvertPage;
