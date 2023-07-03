import  PlayListDetailsSlice  from "./PlayListDetailsSlice";
import PlayerSlice from "./PlayerSlice";


const { combineReducers } = require("redux");




export const rootReducer = combineReducers({
    playlistDetails: PlayListDetailsSlice ,
    playSong: PlayerSlice
  });
  