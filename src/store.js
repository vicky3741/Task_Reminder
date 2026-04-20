import { configureStore } from '@reduxjs/toolkit';
import notesReducer from './notesSlice';

/*
 * EXPERIMENT 7: Manage application state using Redux.
 */

export const store = configureStore({
  reducer: {
    notes: notesReducer,
  },
});
