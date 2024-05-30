import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import playlistReducer from './PlaylistSlice.js';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    playlists: playlistReducer,
  },
});
