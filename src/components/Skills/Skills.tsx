import { useGetSkillsQuery } from "../../api/skillsApi/skillsApi";
import { useAppDispatch, useAppSelector } from "../../hooks/rtk";
import { useState, useCallback, useEffect } from "react";
import SkillsList from "../SkillsList/SkillsList";
import useToggle from "../../hooks/useToggle";
import Modal from "../Modal/Modal";
import styles from "./styles.module.css";
import { clearSkillsFilter } from "../../redux/slices/filterSlice";

const Skills = () => {
  const [limit, setLimit] = useState<number>(5);
  const [isOpen, toggle] = useToggle(false);
  const dispatch = useAppDispatch();
  const specializations = useAppSelector(
    (state) => state.filter.specializationsIds
  );
  const selectedSkills = useAppSelector((state) => state.filter.skillsIds);

  const hasSpecializations = specializations && specializations.length > 0;

  const {
    data: skills,
    isLoading,
    isError,
  } = useGetSkillsQuery(
    hasSpecializations ? { specializations, limit } : { limit },
  );

  useEffect(() => {
    const availableSkillIds = skills?.data.map((skill) => skill.id);
    const hasInvalidSelection = selectedSkills.some(
      (skillId) => !availableSkillIds?.includes(skillId),
    );

    if (hasInvalidSelection) {
      dispatch(clearSkillsFilter());
    }
  }, [skills, specializations, selectedSkills, dispatch]);

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
