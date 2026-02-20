import { combineReducers } from "@reduxjs/toolkit";
import specializationsFilterReducer from "./slices/specializationsFilterSlice";
import skillsFilterReducer from "./slices/skillsFilterSlice";
import ratesFilterReducer from "./slices/ratesFilterSlice";
import complexitiesFilterReducer from "./slices/complexitiesFilterSlice";
import searchFilterReducer from "./slices/searchingFilterSlice";
import paginationReducer from "./slices/paginationSlice";
import questionsReducer from "./slices/questionsSlice";

const rootReducer = combineReducers({
  specializationsFilter: specializationsFilterReducer,
  skillsFilter: skillsFilterReducer,
  ratesFilter: ratesFilterReducer,
  complexitiesFilter: complexitiesFilterReducer,
  searchingFilter: searchFilterReducer,
  pagination: paginationReducer,
  questions: questionsReducer
});

export default rootReducer