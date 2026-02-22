import { addSkillId, removeSkillId } from "../../redux/slices/filterSlice";
import type { Skill } from "../../api/skillsApi/models/skillsType";
import useToggleEntity from "../../hooks/useToggleEntity";
import styles from "./styles.module.css";

const SkillListItem = ({ id, title, imageSrc }: Skill) => {
  const [isActive, toggleSkill] = useToggleEntity(
    id,
    addSkillId,
    removeSkillId,
  );

  return (
    <button
      onClick={toggleSkill}
      className={isActive ? "defaultBtn activeBtn" : "defaultBtn"}
    >
      {imageSrc && (
        <img src={imageSrc} alt={title} className={styles.img_skill} />
      )}
      {title}
    </button>
  );
};

export default SkillListItem;
