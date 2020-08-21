import { combineReducers } from '@reduxjs/toolkit';

import gameReducer from './components/game/slice';

const reducers = combineReducers({
  game: gameReducer,
});

export type RootState = ReturnType<typeof reducers>;

export default reducers;
