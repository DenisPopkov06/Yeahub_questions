import { useGetSkillsQuery } from "../../api/skillsApi/skillsApi";
import { useAppSelector } from "../../hooks/rtk";
import { useState, useCallback } from "react";
import SkillsList from "../SkillsList/SkillsList";
import useToggle from "../../hooks/useToggle";
import Modal from "../Modal/Modal";
import styles from "./styles.module.css";

const Skills = () => {
  const [limit, setLimit] = useState<number>(5);
  const [isOpen, toggle] = useToggle(false);
  const specializations = useAppSelector(
    (state) => state.reducer.specializationsFilter.ids,
  );

  const hasSpecializations = specializations && specializations.length > 0;

  const {
    data: skills,
    isLoading,
    isError,
  } = useGetSkillsQuery(
    hasSpecializations ? { specializations, limit } : { limit },
  );

  const toggleSkills = useCallback(() => {
    toggle();
    setLimit(isOpen ? 5 : 45);
  }, [isOpen]);

  if (isError) return <Modal />;

  return (
    <>
      <div className={styles.skills_container}>
        <div>Навыки</div>
        {!isLoading && skills && <SkillsList skills={skills} />}
        <button onClick={toggleSkills} className={styles.skillsBtn}>
          {isOpen ? "Скрыть все" : "Показать все"}
        </button>
      </div>
    </>
  );
};

export default Skills;
