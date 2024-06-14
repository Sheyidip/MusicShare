import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSpotifyPlaylists, fetchYouTubePlaylists } from '../slices/playlistSlice';
import PlaylistConvert from '../components/PlaylistConvert';
import PlaylistImport from '../components/PlaylistImport';
import './ConvertPage.css';

const ConvertPage = () => {
  const dispatch = useDispatch();
  const { spotifyPlaylists, youtubePlaylists, status, error } = useSelector((state) => state.playlists);
  const [allPlaylists, setAllPlaylists] = useState([]);
  const [conversionStatus, setConversionStatus] = useState('');
  const [sourceService, setSourceService] = useState('spotify'); // default value
  const [targetService, setTargetService] = useState('youtube'); // default value

  useEffect(() => {
    dispatch(fetchSpotifyPlaylists());
    dispatch(fetchYouTubePlaylists());
  }, [dispatch]);

  useEffect(() => {
    if (status === 'succeeded') {
      setAllPlaylists([
        ...spotifyPlaylists,
        ...youtubePlaylists,
      ]);
    }
  }, [status, spotifyPlaylists, youtubePlaylists]);

  const handleImport = (importedPlaylists) => {
    setAllPlaylists(importedPlaylists);
  };

  const convertPlaylist = async (playlistId, targetService) => {
    setConversionStatus('Converting...');

    try {
      // Fetch the selected playlist's tracks
      const selectedPlaylist = allPlaylists.find(pl => pl.id === playlistId);
      const tracks = await fetchTracksFromPlaylist(selectedPlaylist);

      // Map tracks to the target service
      const mappedTracks = await mapTracksToTargetService(tracks, targetService);

      // Create a new playlist on the target service
      await createNewPlaylistOnTargetService(mappedTracks, targetService);

      setConversionStatus('Conversion Successful!');
    } catch (error) {
      console.error(error);
      setConversionStatus('Conversion Failed!');
    }
  };

  if (status === 'loading') return <div>Loading...</div>;
  if (status === 'failed') return <div>Error: {error}</div>;

  return (
    <div className="convertPageContainer">
      <h2>Convert Your Playlist</h2>
      <PlaylistImport onImport={handleImport} />
      <PlaylistConvert 
        sourceService={sourceService} 
        targetService={targetService} 
        playlists={allPlaylists} 
        onConvert={convertPlaylist} 
      />
      <div className="conversionStatus">{conversionStatus}</div>
    </div>
  );
};

const fetchTracksFromPlaylist = async (playlist) => {
  if (playlist.service === 'spotify') {
    const token = localStorage.getItem('spotifyAccessToken');
    console.log('Spotify Access Token:', token);
    const response = await fetch(`https://api.spotify.com/v1/playlists/${playlist.id}/tracks`, {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });
    const data = await response.json();
    return data.items.map(item => item.track);
  }

  if (playlist.service === 'youtube') {
    const token = localStorage.getItem('googleAccessToken');
    console.log('Google Access Token:', token);
    const response = await fetch(`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${playlist.id}&maxResults=50`, {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });
    const data = await response.json();
    return data.items.map(item => ({
      name: item.snippet.title,
      artist: item.snippet.videoOwnerChannelTitle,
      id: item.snippet.resourceId.videoId,
    }));
  }
};

const mapTracksToTargetService = async (tracks, targetService) => {
  return tracks.map(track => ({
    name: track.name,
    artist: track.artist,
    id: track.id,
  }));
};

const createNewPlaylistOnTargetService = async (tracks, targetService) => {
  if (targetService === 'spotify') {
    const response = await fetch('https://api.spotify.com/v1/users/me/playlists', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('spotifyAccessToken')}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: 'Converted Playlist',
        description: 'Playlist converted using Playlist Converter',
      }),
    });

    const newPlaylist = await response.json();
    const trackUris = tracks.map(track => `spotify:track:${track.id}`);
    await fetch(`https://api.spotify.com/v1/playlists/${newPlaylist.id}/tracks`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('spotifyAccessToken')}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        uris: trackUris,
      }),
    });
  }

  if (targetService === 'youtube') {
    const response = await fetch('https://www.googleapis.com/youtube/v3/playlists', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('googleAccessToken')}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        snippet: {
          title: 'Converted Playlist',
          description: 'Playlist converted using Playlist Converter',
        },
      }),
    });

    const newPlaylist = await response.json();
    const trackUris = tracks.map(track => ({
      snippet: {
        playlistId: newPlaylist.id,
        resourceId: {
          kind: 'youtube#video',
          videoId: track.id,
        },
      },
    }));

    for (const track of trackUris) {
      await fetch('https://www.googleapis.com/youtube/v3/playlistItems', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('googleAccessToken')}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(track),
      });
    }
  }
};

export default ConvertPage;
