import { useEffect } from "react";
import { useAppDispatch } from "../../hooks/rtk";
import { useGetQuestionsQuery } from "../../api/questionsApi/questionsApi";
import { setTotalPages } from "../../redux/slices/paginationSlice";
import useQuestionsQueryParams from "../../hooks/useQuestionsQueryParams";
import QuestionsList from "../QuestionsList/QuestionsList";
import Modal from "../Modal/Modal";
import styles from "./styles.module.css";

const Questions = () => {
  const dispatch = useAppDispatch();
  const queryParams = useQuestionsQueryParams()

  const {
    data: questions,
    isLoading,
    isError,
  } = useGetQuestionsQuery(queryParams);
  console.log(questions)
  useEffect(() => {
    if (questions?.total !== undefined) {
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
