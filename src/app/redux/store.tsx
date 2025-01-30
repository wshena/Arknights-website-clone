import { configureStore } from '@reduxjs/toolkit';
import utilityReducer from './slice/UtilitySlice';
import { useDispatch } from 'react-redux';

export const useAppDispatch: () => AppDispatch = useDispatch;

export const store = configureStore({
  reducer: {
    utility: utilityReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;