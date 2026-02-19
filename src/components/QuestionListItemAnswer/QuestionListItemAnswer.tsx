import type { Question } from "../../api/questionsApi/models/questionsType";
import styles from "./styles.module.css";

const QuestionListItemAnswer = (question: Question) => {
  return (
    <>
      <div className={styles.answer_description}>
        <div className={styles.answer_info}>
          Рейтинг: <span>{question.rate}</span>
        </div>
        <div className={styles.answer_info}>
          Сложность:<span>{question.complexity}</span>
        </div>
      </div>
      <div
        className={styles.short_answer}
        dangerouslySetInnerHTML={{ __html: question.shortAnswer }}
      ></div>
    </>
  );
};

export default QuestionListItemAnswer;
