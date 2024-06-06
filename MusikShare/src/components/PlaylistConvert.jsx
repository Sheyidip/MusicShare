// src/components/PlaylistConvert.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './PlaylistConvert.css';

const PlaylistConvert = ({ sourceService, targetService, playlist }) => {
  const [convertedPlaylist, setConvertedPlaylist] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (sourceService && targetService && playlist) {
      setLoading(true);
      axios.post('http://localhost:5000/api/convert', { sourceService, targetService, playlist })
        .then(response => {
          setConvertedPlaylist(response.data);
          setLoading(false);
        })
        .catch(error => {
          console.error('Error converting playlist:', error);
          setLoading(false);
        });
    }
  }, [sourceService, targetService, playlist]);

  if (loading) {
    return <div className="loading">Converting your playlist...</div>;
  }

  if (!convertedPlaylist) {
    return null;
  }

  return (
    <div className="convertedPlaylist">
      <h3>Converted Playlist</h3>
      <ul>
        {convertedPlaylist.map((track, index) => (
          <li key={index}>{track.title} by {track.artist}</li>
        ))}
      </ul>
    </div>
  );
};

export default PlaylistConvert;
