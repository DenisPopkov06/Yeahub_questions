import { useEffect } from "react";
import { useAppDispatch } from "../../hooks/rtk";
import { useGetQuestionsQuery } from "../../api/questionsApi/questionsApi";
import { setTotalPages } from "../../redux/slices/paginationSlice";
import { addQuestions } from "../../redux/slices/questionsSlice";
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

  useEffect(() => {
    if (questions?.total) {
      dispatch(setTotalPages(Math.ceil(questions.total / questions.limit)));
    }
  }, [questions?.total, questions?.limit]);

  useEffect(() => {
    if (questions?.data) {
      dispatch(addQuestions(questions.data));
    }
  }, [questions?.data]);

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
