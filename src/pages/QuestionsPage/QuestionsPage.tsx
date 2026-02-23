import QuestionsAside from "../../components/QuestionsAside/QuestionsAside";
import MainLayout from "../../components/MainLayout/MainLayout";
import Pagination from "../../components/Pagination/Pagination";
import Questions from "../../components/Questions/Questions";
import styles from "./styles.module.css";

const QuestionsPage = () => {
  return (
    <MainLayout>
      <div className={styles.questions_section}>
        <div className={styles.questions_header}>Вопросы:</div>
        <Questions />
        <Pagination />
      </div>
      <QuestionsAside />
    </MainLayout>
  );
};

export default QuestionsPage;
