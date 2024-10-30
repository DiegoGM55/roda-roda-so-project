import { configureStore } from '@reduxjs/toolkit';
import rouletteReducer from './slices/rouletteSlice';

const store = configureStore({
  reducer: {
    roulette: rouletteReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;