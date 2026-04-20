import { createSlice } from '@reduxjs/toolkit';

/*
 * EXPERIMENT 7: Set up Redux, create actions and reducers and manage application state using redux.
 * This slice demonstrates actions (increment, decrement) and a reducer that handles
 * changes to the state.
 */

const initialState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers.
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

export const { increment, decrement } = counterSlice.actions;

export default counterSlice.reducer;
