import { useAppSelector } from "../../hooks/rtk";
import social_links from "../../assets/Images//Social Links.png";
import ava from "../../assets/Images//ava.jpg";
import styles from "./styles.module.css";

const QuestionAuthor = () => {
  const question = useAppSelector((state) => state.question.question);
  return (
    <div className={styles.aside_author}>
      <div className={styles.author_container}>
        <img src={ava} alt="ava" className={styles.ava} />
        <div>
          <div className={styles.username}>{question?.createdBy.username}</div>
          <div>Guru</div>
        </div>
      </div>
      <p>Guru – это эксперты YeaHub, которые помогают развивать комьюнити.</p>
      <img
        src={social_links}
        alt="social links"
        className={styles.social_links}
      />
    </div>
  );
};

export default QuestionAuthor;
