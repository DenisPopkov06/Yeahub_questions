import { useMemo } from "react";
import RateItem from "../RateItem/RateItem";
import styles from "./styles.module.css";
const Rates = () => {
  const rates = useMemo(() => [1, 2, 3, 4, 5], []);
  return (
    <>
      <div>Рейтинг</div>
      <ul className={styles.rateList}>
        {rates.map((rate, index) => (
          <li key={index}>
            <RateItem rate={rate} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default Rates;
