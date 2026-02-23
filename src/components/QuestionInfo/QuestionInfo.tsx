import { useAppSelector } from "../../hooks/rtk";
import styles from "./styles.module.css";

const QuestionInfo = () => {
  const question = useAppSelector((state) => state.question.question);
  console.log(question?.keywords);

  return (
    <div className={styles.aside_info}>
      <div>
        <div className={styles.question_description_title}>Уровень:</div>
        <div className={styles.question_description}>
          <div className={styles.question_info}>
            Рейтинг: <span>{question?.rate}</span>
          </div>
          <div className={styles.question_info}>
            Сложность:<span>{question?.complexity}</span>
          </div>
        </div>
      </div>

      <div>
        <div className={styles.question_description_title}>Навыки:</div>
        <div className={styles.question_info_container}>
          {question?.questionSkills.map((skill) => (
            <div key={skill.id} className={styles.skill}>
              {skill.imageSrc && <img src={skill.imageSrc} alt="" />}
              <div>{skill.title}</div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <div className={styles.question_description_title}>Ключевые слова:</div>
        <div className={styles.question_info_container}>
          {question?.keywords.map((keyword) => (
            <div key={keyword} className={styles.keyword}>
              #{keyword}
            </div>
          ))}
        </div>
      </div>

      <div>
        Автор:{" "}
        <span className={styles.author}>
          {question?.createdBy.username}
        </span>
      </div>
    </div>
  );
};

export default QuestionInfo;
