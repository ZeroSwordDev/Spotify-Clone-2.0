import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  song: {},
  playback: {},
  loading: false,
}

export const PlayerSlice = createSlice({
  name: 'Player',
  initialState,
  reducers: {
    playSongStart: (state, { payload }) => {
      state.loading = true
      state.error = null
    },
    playSongSuccess: (state, { payload }) => {
      state.song = payload
      state.loading = false
      state.error = null
    },
    playSongFailure: (state, { payload }) => {
      state.loading = true
      state.error = null
    },
    getPlaybackStateStart: (state, { payload }) => {
      state.loading = true
      state.error = null
    },
    getPlaybackStateSuccess: (state, { payload }) => {
      state.song = payload
      state.loading = false
      state.error = null
    },
    getPlaybackStateFailure: (state, { payload }) => {
      state.loading = true
      state.error = null
    },
  },
})

// Action creators are generated for each case reducer function
export const {
  playSongStart,
  playSongSuccess,
  playSongFailure,
  getPlaybackStateStart,
  getPlaybackStateSuccess,
  getPlaybackStateFailure,
} = PlayerSlice.actions

export default PlayerSlice.reducer

/* Actions */

export const playSong = (accessToken, track) => async dispatch => {
  dispatch(playSongStart())

  try {
    const response = await axios.put('https://api.spotify.com/v1/me/player/play', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      body: {
        uris: [track.uri],
      },
    })
    dispatch(playSongSuccess(response.data.items))
  } catch (error) {
    dispatch(playSongFailure(error.message))
  }
}
export const getPlaybackState = accessToken => async dispatch => {
  dispatch(getPlaybackStateStart())

  try {
    const response = await axios.get(`https://api.spotify.com/v1/me/player`, {
      headers: {
        Authorization: 'Bearer ' + accessToken,
      },
    })
    dispatch(getPlaybackStateSuccess(response.data.items))
  } catch (error) {
    dispatch(getPlaybackStateFailure(error.message))
  }
}
