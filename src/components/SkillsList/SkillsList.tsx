import type { SkillsResponse } from "../../api/skillsApi/models/skillsType";
import SkillListItem from "../SkillListItem/SkillListItem";
import styles from "./styles.module.css";

type SkillListProps = {
  skills: SkillsResponse;
};

const SkillList = ({ skills }: SkillListProps) => {
  if (skills?.data?.length === 0) return <div>Нет подходящих навыков</div>;

  return (
    <ul className={styles.skill_list_container}>
      {skills.data.map((skill) => (
        <li key={skill.id}>
          <SkillListItem {...skill} />
        </li>
      ))}
    </ul>
  );
};

export default SkillList;
