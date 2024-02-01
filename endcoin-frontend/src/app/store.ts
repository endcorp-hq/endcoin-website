import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { programReducer } from '../features/program/program-slice';

export const store = configureStore({
  reducer: {
    program: programReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
