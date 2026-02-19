import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface SpecializationsId {
  ids: number[];
}

const initialState: SpecializationsId = {
  ids: [],
};

export const specializationsFilterSlice = createSlice({
  name: "specializationsFilter",
  initialState,
  reducers: {
    addSpecializationId: (state, action: PayloadAction<number>) => {
      state.ids.push(action.payload);
    },
    removeSpecializationId: (state, action: PayloadAction<number>) => {
      state.ids = state.ids.filter((id) => id !== action.payload);
    },
  },
});

export const { addSpecializationId, removeSpecializationId } =
  specializationsFilterSlice.actions;

export default specializationsFilterSlice.reducer;
