import { useCallback } from "react";
import { useAppDispatch } from "../../hooks/rtk";
import { setCurrentPage } from "../../redux/slices/paginationSlice";
import {
  addComplexity,
  removeComplexity,
} from "../../redux/slices/complexitiesFilterSlice";
import useToggle from "../../hooks/useToggle";

type ComplexityItem = {
  label: string;
  value: number[];
};

type ComplexityItemProps = {
  complexity: ComplexityItem;
};

const ComplexityItem = ({ complexity }: ComplexityItemProps) => {
  const [isActive, toggle] = useToggle(false);
  const dispatch = useAppDispatch();

  const toggleComplexity = useCallback(() => {
    if (isActive) {
      dispatch(removeComplexity(complexity.value));
    } else {
      dispatch(addComplexity(complexity.value));
    }
    toggle();
    dispatch(setCurrentPage(1));
  }, [isActive, complexity.value]);
  return (
    <button
      className={isActive ? "defaultBtn activeBtn" : "defaultBtn"}
      onClick={toggleComplexity}
    >
      {complexity.label}
    </button>
  );
};

export default ComplexityItem;
