import useToggleEntity from "../../hooks/useToggleEntity";
import { addRate, removeRate } from "../../redux/slices/filterSlice"

type RateItemProps = {
  rate: number;
};

const RateItem = ({ rate }: RateItemProps) => {
  const [isActive, toggleRate] = useToggleEntity(rate, addRate, removeRate);
  return (
    <button
      onClick={toggleRate}
      className={isActive ? "defaultBtn activeBtn" : "defaultBtn"}
    >
      {rate}
    </button>
  );
};

export default RateItem;
