import React from 'react';
import PropTypes from 'prop-types';
import './PlaylistExport.css';

const PlaylistExport = ({ playlists }) => {
  const handleExport = () => {
    const csvContent = 'data:text/csv;charset=utf-8,'
      + playlists.map(p => `${p.name},${p.service}`).join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', 'playlists.csv');
    document.body.appendChild(link);
    link.click();
  };

  return (
    <div>
      <button onClick={handleExport}>Export Playlists</button>
    </div>
  );
};

PlaylistExport.propTypes = {
  playlists: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    service: PropTypes.string.isRequired,
  })).isRequired,
};

export default PlaylistExport;
