import { useMemo } from "react";
import ComplexityItem from "../ComplexityItem/ComplexityItem";
import styles from "./styles.module.css";
const Complexities = () => {
  const complexities = useMemo(
    () => [
      { label: "1-3", value: [1, 2, 3] },
      { label: "4-6", value: [4, 5, 6] },
      { label: "7-8", value: [7, 8, 9] },
      { label: "9-10", value: [9, 10] },
    ],
    [],
  );
  return (
    <>
      <div>Уровень сложности</div>
      <ul className={styles.complexityList}>
        {complexities.map((complexity) => (
          <li key={complexity.label}>
            <ComplexityItem complexity={complexity} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default Complexities;
