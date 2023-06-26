import { combineReducers } from '@reduxjs/toolkit';
import tempItemReducer from '@/features/_tempItem/tempItemSlice';
import authReducer from '@/features/auth/authSlice';

const rootReducer = combineReducers({
  tempItem: tempItemReducer,
  auth: authReducer,
});

export default rootReducer;
