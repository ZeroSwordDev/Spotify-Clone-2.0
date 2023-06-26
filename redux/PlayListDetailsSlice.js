import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  playlistDetails: {},
  loading: false,
  error: null,
};

export const PlayListDetailsSlice = createSlice({
  name: "PlayList",
  initialState,
  reducers: {
    fetchPlaylistDetailsStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchPlaylistDetailsSuccess: (state, action) => {
      state.playlistDetails = action.payload;
      state.loading = false;
      state.error = null;
    },
    fetchPlaylistDetailsFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  fetchPlaylistDetailsStart,
  fetchPlaylistDetailsSuccess,
  fetchPlaylistDetailsFailure,
} = PlayListDetailsSlice.actions;

export default PlayListDetailsSlice.reducer;

/* Actions */

export const fetchPlaylistDetails = (id, accessToken) => async (dispatch) => {
  dispatch(fetchPlaylistDetailsStart());

  try {
    const response = await axios.get(
      `https://api.spotify.com/v1/playlists/${id}/tracks`,
      {
        headers: {
          Authorization: "Bearer " + accessToken,
        },
      }
    );
    dispatch(fetchPlaylistDetailsSuccess(response.data.items));
  } catch (error) {
    dispatch(fetchPlaylistDetailsFailure(error.message));
  }
};
