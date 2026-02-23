import Complexities from "../Complexities/Complexities";
import Rates from "../Rates/Rates";
import Searching from "../Searching/Searching";
import Skills from "../Skills/Skills";
import Specializations from "../Specializations/Specializations";
import styles from "./styles.module.css";

const QuestionsAside = () => {
  return (
    <aside className={styles.aside}>
      <Searching />
      <Specializations />
      <Skills />
      <Complexities />
      <Rates />
    </aside>
  );
};

export default QuestionsAside;
