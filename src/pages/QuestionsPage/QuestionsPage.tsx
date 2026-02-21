import Aside from "../../components/Aside/Aside"
import Pagination from "../../components/Pagination/Pagination";
import Questions from "../../components/Questions/Questions";
import styles from "./styles.module.css";

const QuestionsPage = () => {
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

export default QuestionsPage;
