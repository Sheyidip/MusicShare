
import React from 'react';
import './PlaylistImport.css';

const PlaylistImport = ({ title, playlists }) => {
  return (
    <div className="playlistImportContainer">
      <h3>{title}</h3>
      {playlists && playlists.length > 0 ? (
        playlists.map((playlist) => (
          <div key={playlist.id} className="playlist">
            {playlist.name || playlist.snippet.title}
          </div>
        ))
      ) : (
        <p>No {title.toLowerCase()} found.</p>
      )}
    </div>
  );
};

export default PlaylistImport;
