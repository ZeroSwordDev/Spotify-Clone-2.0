import  PlayListDetailsSlice  from "./PlayListDetailsSlice";


const { combineReducers } = require("redux");




export const rootReducer = combineReducers({
    playlistDetails: PlayListDetailsSlice ,
  });
  