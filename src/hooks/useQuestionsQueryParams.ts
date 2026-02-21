import { useAppSelector } from "./rtk";

export default function useQuestionsQueryParams() {
  const rate = useAppSelector((state) => state.ratesFilter.rates);
  const skills = useAppSelector((state) => state.skillsFilter.ids);
  const complexity = useAppSelector(
    (state) => state.complexitiesFilter.complexities,
  );
  const specializations = useAppSelector(
    (state) => state.specializationsFilter.ids,
  );
  const searchingValue = useAppSelector((state) => state.searchingFilter.value);
  const currentPage = useAppSelector((state) => state.pagination.currentPage);

  return {
    rate,
    skills,
    complexity,
    specializations,
    searchingValue,
    page: currentPage,
  };
}
