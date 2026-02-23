import QuestionAuthor from "../QuestionAuthor/QuestionAuthor";
import QuestionInfo from "../QuestionInfo/QuestionInfo";
import styles from "./styles.module.css"

const QuestionAside = () => {
  return (
    <aside className={styles.aside}>
      <QuestionInfo />
      <QuestionAuthor />
    </aside>
  );
};

export default QuestionAside;
