import { createSlice } from '@reduxjs/toolkit';

const playlistSlice = createSlice({
  name: 'playlists',
  initialState: {
    items: [],
  },
  reducers: {
    setPlaylists(state, action) {
      state.items = action.payload;
    },
  },
});

export const { setPlaylists } = playlistSlice.actions;

export default playlistSlice.reducer;
