import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface Complexities {
  complexities: number[]
}

const initialState: Complexities = {
  complexities: []
};

export const complexitiesFilterSlice = createSlice({
  name: "complexitiesFilter",
  initialState,
  reducers: {
    addComplexity: (state, action: PayloadAction<number[]>) => {
      state.complexities = [...state.complexities, ...action.payload]
    },
    removeComplexity: (state, action: PayloadAction<number[]>) => {
      state.complexities = state.complexities.filter((complexity) => action.payload.indexOf(complexity)<0);
    },
  },
});

export const { addComplexity, removeComplexity } = complexitiesFilterSlice.actions;

export default complexitiesFilterSlice.reducer;

