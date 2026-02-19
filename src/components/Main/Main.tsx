import Aside from "../Aside/Aside";
import QuestionsSection from "../QuestionsSection/QuestionsSection";
import styles from "./styles.module.css";

const Main = () => {
  return (
    <main className={styles.main}>
      <QuestionsSection />
      <Aside />
    </main>
  );
};

export default Main;
