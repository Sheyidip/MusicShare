
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSpotifyPlaylists, fetchYouTubePlaylists } from '../slices/playlistSlice';
import { getSpotifyAuthURL, getSpotifyAccessToken } from '../api/spotifyAuth';
import { getGoogleAuthURL, getGoogleAccessToken } from '../api/googleAuth';
import PlaylistImport from '../components/PlaylistImport';
import './ImportPage.css';

const ImportPage = () => {
  const dispatch = useDispatch();
  const { spotifyPlaylists, youtubePlaylists, status, error } = useSelector((state) => state.playlists);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');
    const state = urlParams.get('state');

    if (code && state === 'spotify') {
      getSpotifyAccessToken(code).then((token) => {
        dispatch(fetchSpotifyPlaylists(token));
      });
    } else if (code && state === 'google') {
      getGoogleAccessToken(code).then((token) => {
        dispatch(fetchYouTubePlaylists(token));
      });
    }
  }, [dispatch]);

  const handleSpotifyLogin = () => {
    const authUrl = getSpotifyAuthURL();
    window.location.href = `${authUrl}&state=spotify`;
  };

  const handleGoogleLogin = () => {
    const authUrl = getGoogleAuthURL();
    window.location.href = `${authUrl}&state=google`;
  };

  if (status === 'loading') return <div>Loading...</div>;
  if (status === 'failed') return <div>Error: {error}</div>;

  return (
    <div className="importPageContainer">
      <h2>Import Your Playlists</h2>
      <div className="authButtons">
        <button onClick={handleSpotifyLogin} className="spotifyBtn">Login with Spotify</button>
        <button onClick={handleGoogleLogin} className="googleBtn">Login with Google</button>
      </div>
      <div className="playlists">
        <PlaylistImport title="Spotify Playlists" playlists={spotifyPlaylists} />
        <PlaylistImport title="YouTube Playlists" playlists={youtubePlaylists} />
      </div>
    </div>
  );
};

export default ImportPage;
