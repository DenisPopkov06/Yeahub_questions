import type { Question } from "../../api/questionsApi/models/questionsType";
import { lazy, Suspense } from "react";
import useToggle from "../../hooks/useToggle";
import Arrow_question from "../../assets/Images/Arrow_question.png";
import styles from "./styles.module.css";

const QuestionListItemAnswer = lazy(
  () => import("../QuestionListItemAnswer/QuestionListItemAnswer"),
);

const QuestionListItem = (question: Question) => {
  const [isActive, toggle] = useToggle(false);

  return (
    <div className={styles.question_container}>
      <div className={styles.question}>
        <div className={styles.question_section}>
          <div className={styles.question_title}>{question.title}</div>
        </div>
        <button
          className={
            isActive ? styles.question_button_active : styles.question_button
          }
          onClick={toggle}
        >
          <img src={Arrow_question} alt="arrow" />
        </button>
      </div>
      {isActive && (
        <Suspense
          fallback={<p className={styles.loading_fallback}>Loading...</p>}
        >
          <QuestionListItemAnswer {...question} />
        </Suspense>
      )}
    </div>
  );
};

export default QuestionListItem;
