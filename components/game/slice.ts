import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  questions: [],
};

const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {},
});

export default gameSlice;
