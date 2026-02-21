import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type Pagination = {
  currentPage: number;
  totalPages: number;
};

const initialState: Pagination = {
  currentPage: 1,
  totalPages: 0,
};

export const paginationSlice = createSlice({
  name: "pagination",
  initialState,
  reducers: {
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
  },
});

export const { setCurrentPage, setTotalPages, setNextPage, setPrevPage } =
  paginationSlice.actions;

export default paginationSlice.reducer;
