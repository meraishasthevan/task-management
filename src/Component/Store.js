import { configureStore } from '@reduxjs/toolkit';
import taskReducer from './Slice/TaskSlice.js';

export default configureStore({
  reducer: {
    tasks:taskReducer
  },

})