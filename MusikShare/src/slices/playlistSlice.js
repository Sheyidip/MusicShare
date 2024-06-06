// src/slices/playlistSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getSpotifyPlaylists, getYouTubePlaylists } from '../api/musicServices';

export const fetchSpotifyPlaylists = createAsyncThunk(
  'playlists/fetchSpotify',
  async (accessToken) => {
    const playlists = await getSpotifyPlaylists(accessToken);
    return playlists;
  }
);

export const fetchYouTubePlaylists = createAsyncThunk(
  'playlists/fetchYouTube',
  async (accessToken) => {
    const playlists = await getYouTubePlaylists(accessToken);
    return playlists;
  }
);

const playlistSlice = createSlice({
  name: 'playlists',
  initialState: {
    spotify: [],
    youtube: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSpotifyPlaylists.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSpotifyPlaylists.fulfilled, (state, action) => {
        state.loading = false;
        state.spotify = action.payload;
      })
      .addCase(fetchSpotifyPlaylists.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(fetchYouTubePlaylists.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchYouTubePlaylists.fulfilled, (state, action) => {
        state.loading = false;
        state.youtube = action.payload;
      })
      .addCase(fetchYouTubePlaylists.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default playlistSlice.reducer;
