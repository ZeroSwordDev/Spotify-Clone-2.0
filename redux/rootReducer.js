import  counterSlice  from "./counterSlice";


const { combineReducers } = require("redux");




export const rootReducer = combineReducers({
    counter: counterSlice ,
  });
  