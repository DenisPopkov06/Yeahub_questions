import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { Question } from "../../api/questionsApi/models/questionsType";

type QuestionType = {
  question: Question | null;
}

const initialState: QuestionType = {
  question: null
};

export const questionSlice = createSlice({
  name: "question",
  initialState,
  reducers: {
    addQuestion: (state, action: PayloadAction<Question>) => {
      state.question = action.payload
    },
  },
});

export const { addQuestion } = questionSlice.actions;

export default questionSlice.reducer;