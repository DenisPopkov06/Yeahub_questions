import Aside from "../Aside/Aside";
import Pagination from "../Pagination/Pagination";
import Questions from "../Questions/Questions";
import styles from "./styles.module.css";

const QuestionsSection = () => {
  return (
    <>
      <div className={styles.questions_section}>
        <div className={styles.questions_header}>Вопросы:</div>
        <Questions />
        <Pagination />
      </div>
      <Aside />
    </>
  );
};

export default QuestionsSection;
