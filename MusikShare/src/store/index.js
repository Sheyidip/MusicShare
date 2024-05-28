import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import playlistReducer from './playlistSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    playlists: playlistReducer,
  },
});
