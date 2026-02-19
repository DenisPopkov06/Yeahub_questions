import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface SearchValue {
  value: string
}

const initialState: SearchValue = {
  value: ""
};

export const searchFilterSlice = createSlice({
  name: "complexitiesFilter",
  initialState,
  reducers: {
    addSearchValue: (state, action: PayloadAction<string>) => {
      state.value = action.payload
    },
  },
});

export const { addSearchValue } = searchFilterSlice.actions;

export default searchFilterSlice.reducer;

