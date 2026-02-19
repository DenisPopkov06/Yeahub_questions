import { useMemo, useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../../hooks/rtk";
import { useGetQuestionsQuery } from "../../api/questionsApi/questionsApi";
import { setTotalPages } from "../../redux/slices/paginationSlice";
import Modal from "../Modal/Modal";
import QuestionsList from "../QuestionsList/QuestionsList";
import styles from "./styles.module.css";

const Questions = () => {
  const dispatch = useAppDispatch();

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
  
  const queryParams = useMemo(
    () => ({
      rate,
      skills,
      complexity,
      specializations,
      searchingValue,
      page: currentPage,
    }),
    [rate, skills, complexity, specializations, searchingValue, currentPage],
  );

  const {
    data: questions,
    isLoading,
    isError,
  } = useGetQuestionsQuery(queryParams);

  useEffect(() => {
    if (questions?.total) {
      dispatch(setTotalPages(Math.ceil(questions.total / questions.limit)));
    }
  }, [questions?.total, questions?.limit]);

  if (isLoading) return <div>Загрузка...</div>;
  if (isError) return <Modal />;
  if (questions?.data.length === 0) return <div>Нет вопросов</div>;

  return (
    <div className={styles.questions}>
      {questions && <QuestionsList questions={questions} />}
    </div>
  );
};

export default Questions;
