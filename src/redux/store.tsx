import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { baseApi } from "../api/baseApi";
import specializationsFilterReducer from "./slices/specializationsFilterSlice";
import skillsFilterReducer from "./slices/skillsFilterSlice";
import ratesFilterReducer from "./slices/ratesFilterSlice";
import complexitiesFilterReducer from "./slices/complexitiesFilterSlice";
import searchFilterReducer from "./slices/searchingFilterSlice";
import paginationReducer from "./slices/paginationSlice";

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    specializationsFilter: specializationsFilterReducer,
    skillsFilter: skillsFilterReducer,
    ratesFilter: ratesFilterReducer,
    complexitiesFilter: complexitiesFilterReducer,
    searchingFilter: searchFilterReducer,
    pagination: paginationReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
