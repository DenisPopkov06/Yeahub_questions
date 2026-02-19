import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface SkillsId {
  ids: number[];
}

const initialState: SkillsId = {
  ids: [],
};

export const skillsFilterSlice = createSlice({
  name: "skillsFilter",
  initialState,
  reducers: {
    addSkillId: (state, action: PayloadAction<number>) => {
      state.ids.push(action.payload);
    },
    removeSkillId: (state, action: PayloadAction<number>) => {
      state.ids = state.ids.filter((id) => id !== action.payload);
    },
  },
});

export const { addSkillId, removeSkillId } = skillsFilterSlice.actions;

export default skillsFilterSlice.reducer;

