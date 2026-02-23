import { useGetSpecializationsQuery } from "../../api/specializationApi/specializationApi";
import { useCallback, useState } from "react";
import useToggle from "../../hooks/useToggle";
import SpecializationsList from "../SpecializationsList/SpecializationsList";
import Modal from "../Modal/Modal";
import styles from "./styles.module.css";

const Specializations = () => {
  const [limit, setLimit] = useState<number>(5);
  const [isOpen, toggle] = useToggle(false);
  const {
    data: specializations,
    isLoading,
    isError,
  } = useGetSpecializationsQuery({
    limit,
  });

  const toggleSpecializations = useCallback(() => {
    toggle();
    setLimit(isOpen ? 5 : 15);
  }, [isOpen]);

  if (isError) return <Modal />;

  return (
    <div className={styles.specializations_container}>
      <div>Специализация</div>
      {!isLoading && specializations && (
        <SpecializationsList specializations={specializations} />
      )}
      <button
        onClick={toggleSpecializations}
        className={styles.specializationBtn}
      >
        {isOpen ? "Скрыть все" : "Показать все"}
      </button>
    </div>
  );
};

export default Specializations;
