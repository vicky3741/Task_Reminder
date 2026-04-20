import { createSlice } from '@reduxjs/toolkit';

/*
 * EXPERIMENT 7: 
 * Set up Redux, create actions and reducers and manage application state using redux.
 * We are using Redux Toolkit to manage a list of tasks.
 */

const initialState = {
  tasks: [
    { id: 1, title: 'Learn React Native', completed: true },
    { id: 2, title: 'Master Redux', completed: false },
    { id: 3, title: 'Understand Navigation', completed: false },
  ],
};

const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.push({
        id: Date.now(),
        title: action.payload,
        completed: false,
      });
    },
    toggleTask: (state, action) => {
      const task = state.tasks.find(t => t.id === action.payload);
      if (task) {
        task.completed = !task.completed;
      }
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter(t => t.id !== action.payload);
    },
  },
});

export const { addTask, toggleTask, deleteTask } = taskSlice.actions;
export default taskSlice.reducer;
