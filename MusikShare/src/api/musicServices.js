
import axios from 'axios';

export const getSpotifyPlaylists = async (accessToken) => {
  const response = await axios.get('https://api.spotify.com/v1/me/playlists', {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return response.data.items;
};

export const getYouTubePlaylists = async (accessToken) => {
  const response = await axios.get('https://www.googleapis.com/youtube/v3/playlists', {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
    params: {
      part: 'snippet',
      mine: true,
    },
  });
  return response.data.items.map((item) => ({
    id: item.id,
    title: item.snippet.title,
  }));
};
