import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface Rates {
  rates: number[]
}

const initialState: Rates = {
  rates: [],
};

export const ratesFilterSlice = createSlice({
  name: "ratesFilter",
  initialState,
  reducers: {
    addRate: (state, action: PayloadAction<number>) => {
      state.rates.push(action.payload);
    },
    removeRate: (state, action: PayloadAction<number>) => {
      state.rates = state.rates.filter((rate) => rate !== action.payload);
    },
  },
});

export const { addRate, removeRate } = ratesFilterSlice.actions;

export default ratesFilterSlice.reducer;

