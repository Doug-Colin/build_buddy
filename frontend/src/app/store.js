import { configureStore } from '@reduxjs/toolkit';
//bring in the authReducer (our reducer func) from features/auth/authSlice.js
import authReducer from '../features/auth/authSlice'


export const store = configureStore({
  reducer: {
    auth: authReducer,
  }
})
