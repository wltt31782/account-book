import { combineReducers } from '@reduxjs/toolkit';
import tempItemReducer from '@/features/_tempItem/tempItemSlice';

const rootReducer = combineReducers({
  tempItem: tempItemReducer,
});

export default rootReducer;
