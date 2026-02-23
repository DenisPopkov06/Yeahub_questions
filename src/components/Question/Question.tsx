import { useParams } from "react-router-dom";
import { useGetQuestionByIdQuery } from "../../api/questionsApi/questionsApi";
import { useAppDispatch } from "../../hooks/rtk";
import { useEffect } from "react";
import { addQuestion } from "../../redux/slices/questionSlice";
import styles from "./styles.module.css"

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

  return <div className={styles.questions_section}> </div>;
};

export default Question;
