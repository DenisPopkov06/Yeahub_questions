import { useAppSelector } from "./rtk";

export default function useQuestionsQueryParams() {
  const rate = useAppSelector((state) => state.reducer.ratesFilter.rates);
  const skills = useAppSelector((state) => state.reducer.skillsFilter.ids);
  const complexity = useAppSelector(
    (state) => state.reducer.complexitiesFilter.complexities,
  );
  const specializations = useAppSelector(
    (state) => state.reducer.specializationsFilter.ids,
  );
  const searchingValue = useAppSelector(
    (state) => state.reducer.searchingFilter.value,
  );
  const currentPage = useAppSelector(
    (state) => state.reducer.pagination.currentPage,
  );

  return {
    rate,
    skills,
    complexity,
    specializations,
    searchingValue,
    page: currentPage,
  };
}
