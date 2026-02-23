import { Link } from "react-router-dom";
import type { Question } from "../../api/questionsApi/models/questionsType";
import answer_detailed_arrow from "../../assets/Images/answer_detailed_arrow.png";
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
      {question.imageSrc && (
        <img
          src={question.imageSrc}
          alt="answer"
          className={styles.img_answer}
        />
      )}
      <div
        className={styles.short_answer}
        dangerouslySetInnerHTML={{ __html: question.shortAnswer }}
      ></div>
      <Link className={styles.answer_detailed_container} to={`/${question.id}`}>
        Подробнее <img src={answer_detailed_arrow} alt="More detailed" />
      </Link>
    </>
  );
};

export default QuestionListItemAnswer;
