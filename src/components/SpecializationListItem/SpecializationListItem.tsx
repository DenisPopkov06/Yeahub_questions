import {
  addSpecializationId,
  removeSpecializationId,
} from "../../redux/slices/specializationsFilterSlice";
import type { Specialization } from "../../api/specializationApi/models/specializationsType";
import useToggleEntity from "../../hooks/useToggleEntity";


const SpecializationListItem = ({ id, title }: Specialization) => {
  const [isActive, toggleSpecialization] = useToggleEntity(
    id,
    addSpecializationId,
    removeSpecializationId,
  );

  return (
    <button
      onClick={toggleSpecialization}
      className={isActive ? `activeBtn defaultBtn` : `defaultBtn`}
    >
      {title}
    </button>
  );
};

export default SpecializationListItem;
