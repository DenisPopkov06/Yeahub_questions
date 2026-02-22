import { useAppSelector } from "./rtk";

export default function useQuestionsQueryParams() {
  const rate = useAppSelector((state) => state.filter.rates);
  const skills = useAppSelector((state) => state.filter.skillsIds);
  const complexity = useAppSelector(
    (state) => state.filter.complexities,
  );
  const specializations = useAppSelector(
    (state) => state.filter.specializationsIds,
  );
  const searchingValue = useAppSelector((state) => state.filter.searchingValue);
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
