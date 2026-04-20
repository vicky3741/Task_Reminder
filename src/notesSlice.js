import { createSlice } from '@reduxjs/toolkit';

/*
 * EXPERIMENT 7: Set up Redux, create actions and reducers and manage application state using redux.
 * We are using Redux Toolkit to manage a list of personal notes.
 */

const initialState = {
  notes: [
    { id: '1', title: 'Welcome Note', content: 'This is a sample note using Redux!', color: '#E3F2FD' },
    { id: '2', title: 'Experiment Info', content: 'Each note is stored in the global Redux state.', color: '#F1F8E9' },
  ],
};

const notesSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    addNote: (state, action) => {
      // action.payload contains { title, content, color }
      state.notes.push({
        id: Date.now().toString(),
        ...action.payload,
      });
    },
    deleteNote: (state, action) => {
      state.notes = state.notes.filter(note => note.id !== action.payload);
    },
  },
});

export const { addNote, deleteNote } = notesSlice.actions;
export default notesSlice.reducer;
