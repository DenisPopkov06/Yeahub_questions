import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { Question } from "../../api/questionsApi/models/questionsType";

interface Complexities {
  complexities: number[];
}

type Pagination = {
  currentPage: number;
  totalPages: number;
};

type Questions = {
  questions: Question[];
};

type Rates = {
  rates: number[];
};

type SearchValue = {
  searchingValue: string;
};

type SkillsId = {
  skillsIds: number[];
};

type SpecializationsId = {
  specializationsIds: number[];
};

type Filter = Complexities &
  Pagination &
  Questions &
  Rates &
  SearchValue &
  SkillsId &
  SpecializationsId;

const initialState: Filter = {
  complexities: [],
  currentPage: 1,
  totalPages: 1,
  questions: [],
  rates: [],
  searchingValue: "",
  skillsIds: [],
  specializationsIds: [],
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    addComplexity: (state, action: PayloadAction<number[]>) => {
      state.complexities = [...state.complexities, ...action.payload];
    },
    removeComplexity: (state, action: PayloadAction<number[]>) => {
      state.complexities = state.complexities.filter(
        (complexity) => action.payload.indexOf(complexity) < 0,
      );
    },
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
    setTotalPages: (state, action: PayloadAction<number>) => {
      state.totalPages = action.payload;
    },
    setNextPage: (state) => {
      state.currentPage += 1;
    },
    setPrevPage: (state) => {
      state.currentPage -= 1;
    },
    addRate: (state, action: PayloadAction<number>) => {
      state.rates.push(action.payload);
    },
    removeRate: (state, action: PayloadAction<number>) => {
      state.rates = state.rates.filter((rate) => rate !== action.payload);
    },
    addSearchValue: (state, action: PayloadAction<string>) => {
      state.searchingValue = action.payload;
    },
    addSkillId: (state, action: PayloadAction<number>) => {
      state.skillsIds.push(action.payload);
    },
    removeSkillId: (state, action: PayloadAction<number>) => {
      state.skillsIds = state.skillsIds.filter(
        (skillId) => skillId !== action.payload,
      );
    },
    clearSkillsFilter: (state) => {
      state.skillsIds = [];
    },
    addSpecializationId: (state, action: PayloadAction<number>) => {
      state.specializationsIds.push(action.payload);
    },
    removeSpecializationId: (state, action: PayloadAction<number>) => {
      state.specializationsIds = state.specializationsIds.filter(
        (specializationsId) => specializationsId !== action.payload,
      );
    },
  },
});

export const { addComplexity, removeComplexity } = filterSlice.actions;

export default filterSlice.reducer;
