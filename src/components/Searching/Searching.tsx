import { useCallback, useEffect, useRef, useState } from "react";
import { useAppDispatch } from "../../hooks/rtk";
import { addSearchValue } from "../../redux/slices/filterSlice";
import { setCurrentPage } from "../../redux/slices/paginationSlice";
import useDebounce from "../../hooks/useDebounce";
import searchIcon from "../../assets/Images/Search Icon.png";
import styles from "./styles.module.css";

const Searching = () => {
  const [isFocus, setIsFocus] = useState(false);
  const [localValue, setLocalValue] = useState("");
  const refDiv = useRef<HTMLDivElement>(null);
  const refInput = useRef<HTMLInputElement>(null);
  const debouncedValue = useDebounce(localValue, 300);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(addSearchValue(debouncedValue));
    dispatch(setCurrentPage(1));
  }, [debouncedValue, dispatch]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (refDiv.current && refInput.current) {
        if (refDiv.current.contains(e.target as Node)) {
          setIsFocus(true);
          requestAnimationFrame(() => {
            refInput.current?.focus();
          });
        } else {
          setIsFocus(false);
        }
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const onChangeValue = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setLocalValue(e.target.value);
    },
    [],
  );

  return (
    <div ref={refDiv} className={`${styles.search} ${isFocus && styles.focus}`}>
      <div className={styles.search_icon}>
        <img src={searchIcon} alt="searchIcon" />
      </div>
      <input
        className={styles.input}
        ref={refInput}
        placeholder="Введите вопрос..."
        value={localValue}
        onChange={onChangeValue}
      />
    </div>
  );
};

export default Searching;
