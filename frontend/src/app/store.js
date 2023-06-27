import { configureStore } from '@reduxjs/toolkit';
//bring in the authReducer (our reducer func) from features/auth/authSlice.js
import authReducer from '../features/auth/authSlice'
import taskReducer from '../features/tasks/taskSlice'
import convertReducer from '../features/convert/convertSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    tasks: taskReducer,
    convert: convertReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: true,
    }),
})
