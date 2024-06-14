import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchSpotifyPlaylists = createAsyncThunk('playlists/fetchSpotifyPlaylists', async (token) => {
  const response = await axios.get('https://api.spotify.com/v1/me/playlists', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data.items;
});

export const fetchYouTubePlaylists = createAsyncThunk('playlists/fetchYouTubePlaylists', async (token) => {
  const response = await axios.get('https://www.googleapis.com/youtube/v3/playlists', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data.items;
});

const playlistsSlice = createSlice({
  name: 'playlists',
  initialState: {
    spotifyPlaylists: [],
    youtubePlaylists: [],
    status: 'idle',
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSpotifyPlaylists.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchSpotifyPlaylists.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.spotifyPlaylists = action.payload;
      })
      .addCase(fetchSpotifyPlaylists.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(fetchYouTubePlaylists.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchYouTubePlaylists.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.youtubePlaylists = action.payload;
      })
      .addCase(fetchYouTubePlaylists.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default playlistsSlice.reducer;
