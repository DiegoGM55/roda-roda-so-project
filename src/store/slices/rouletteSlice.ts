import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface RouletteState {
  mustSpin: boolean;
  prizeNumber: number;
  hasSpun: boolean;
}

const initialState: RouletteState = {
  mustSpin: false,
  prizeNumber: 0,
  hasSpun: false,
};

const rouletteSlice = createSlice({
  name: 'roulette',
  initialState,
  reducers: {
    spinRoulette: (state, action: PayloadAction<number>) => {
      state.prizeNumber = action.payload;
      state.mustSpin = true;
      state.hasSpun = true;
    },
    stopRoulette: (state) => {
      state.mustSpin = false;
    },
    setHasSpun: (state, action: PayloadAction<boolean>) => {
        state.hasSpun = action.payload;
    },
    setPrizeNumber: (state, action: PayloadAction<number>) => {
        state.prizeNumber = action.payload;
    }
  },
});

export const { spinRoulette, stopRoulette, setHasSpun, setPrizeNumber } = rouletteSlice.actions;
export default rouletteSlice.reducer;