import type { SpecializationsResponse } from "../../api/specializationApi/models/specializationsType";
import SpecializationListItem from "../SpecializationListItem/SpecializationListItem";
import styles from "./styles.module.css";

type SpecializationListProps = {
  specializations: SpecializationsResponse;
};

const SpecializationsList = ({ specializations }: SpecializationListProps) => {
  if (specializations?.data?.length === 0)
    return <div>Нет подходящих специализаций</div>;

  return (
    <ul className={styles.specialization_list_container}>
      {specializations.data.map((specialization) => (
        <li key={specialization.id}>
          <SpecializationListItem {...specialization} />
        </li>
      ))}
    </ul>
  );
};

export default SpecializationsList;
