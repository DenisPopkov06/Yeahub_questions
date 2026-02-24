import { useAppSelector } from "../../hooks/rtk";
import useToggle from "../../hooks/useToggle";
import arrow from "../../assets/Images/Arrow_question.png";
import styles from "./styles.module.css";

const QuestionLongAnswer = () => {
  const longAnswer = useAppSelector(
    (state) => state.question.question?.longAnswer,
  );
  const [isShowMore, toggle] = useToggle();

  if (!longAnswer) return null;

  let partOfLongAnswer = longAnswer.slice(0, longAnswer.length / 2);

  return (
    <div className={styles.questions_section}>
      <div className={styles.questions_title}>Развернутый ответ</div>
      <div
        dangerouslySetInnerHTML={
          isShowMore ? { __html: longAnswer } : { __html: partOfLongAnswer }
        }
        className={styles.questions_long_answer}
      ></div>
      <div className={styles.show_more_container}>
        <button onClick={toggle} className={styles.show_more_btn}>
          <div>{isShowMore ? "Свернуть" : "Развернуть"}</div>
          <img
            src={arrow}
            alt="arrow"
            className={`${isShowMore && styles.toggled_btn}`}
          />
        </button>
      </div>
    </div>
  );
};

export default QuestionLongAnswer;
