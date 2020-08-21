import { combineReducers } from '@reduxjs/toolkit';

import gameSlice from './components/game/slice';

const reducers = combineReducers({
  game: gameSlice.reducer,
});

export default reducers;
