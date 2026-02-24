import { useAppSelector } from "../../hooks/rtk";
import styles from "./styles.module.css";

const QuestionDescription = () => {
  const question = useAppSelector((state) => state.question.question);

  return (
    <div className={styles.questions_section}>
      {question?.imageSrc && (
        <div>
          <img src={question?.imageSrc} alt="" className={styles.questions_img}/>
        </div>
      )}
      <div>
        <div className={styles.questions_title}>{question?.title}</div>
        <div className={styles.questions_description}>{question?.description}</div>
      </div>
    </div>
  );
};

export default QuestionDescription;
