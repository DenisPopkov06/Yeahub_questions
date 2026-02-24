import { useParams } from "react-router-dom";
import { useGetQuestionByIdQuery } from "../../api/questionsApi/questionsApi";
import { useAppDispatch } from "../../hooks/rtk";
import { useEffect } from "react";
import { addQuestion } from "../../redux/slices/questionSlice";
import QuestionDescription from "../QuestionDescription/QuestionDescription";
import QuestionShortAnswer from "../QuestionShortAnswer/QuestionShortAnswer";
import QuestionLongAnswer from "../QuestionLongAnswer/QuestionLongAnswer";
import Modal from "../Modal/Modal";
import styles from "./styles.module.css";

const Question = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const {
    data: question,
    isError,
    isLoading,
  } = useGetQuestionByIdQuery({ id });

  useEffect(() => {
    dispatch(addQuestion(question));
  }, [question, isError, isLoading, dispatch]);

  if (isError) return <Modal />;

  return (
    <div className={styles.question_container}>
      <QuestionDescription />
      <QuestionShortAnswer />
      <QuestionLongAnswer />
    </div>
  );
};

export default Question;
