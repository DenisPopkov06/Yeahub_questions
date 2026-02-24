import { useAppSelector } from "../../hooks/rtk";
import styles from "./styles.module.css";

const QuestionShortAnswer = () => {
  const shortAnswer = useAppSelector(
    (state) => state.question.question?.shortAnswer,
  );

  return (
    <div className={styles.questions_section}>
      <div className={styles.questions_title}>Короткий ответ</div>
      {shortAnswer && (
        <div
          dangerouslySetInnerHTML={{ __html: shortAnswer }}
          className={styles.questions_short_answer}
        ></div>
      )}
    </div>
  );
};

export default QuestionShortAnswer;
