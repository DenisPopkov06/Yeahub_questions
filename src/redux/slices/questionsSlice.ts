import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { Question } from "../../api/questionsApi/models/questionsType";

type Questions = {
  questions: Question[];
}

const initialState: Questions = {
  questions: []
};

export const questionsSlice = createSlice({
  name: "questions",
  initialState,
  reducers: {
    addQuestions: (state, action: PayloadAction<Question[]>) => {
      state.questions = [...action.payload]
    },
  },
});

export const { addQuestions } = questionsSlice.actions;

export default questionsSlice.reducer;

