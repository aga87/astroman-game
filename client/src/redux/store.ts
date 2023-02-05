// client/src/redux/store.ts
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers';

// Setting up Redux store to manage state changes
export const store = configureStore({
  reducer: rootReducer
});

// Infer the root state type from the store itself
export type RootState = ReturnType<typeof store.getState>;

// Export a hook that resolves dispatch types
export type AppDispatch = typeof store.dispatch;
