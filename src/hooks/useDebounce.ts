import { useEffect, useState } from "react";

export default function useDebounce(value: string, time = 300) {
  const [debounceValue, setDebounceValue] = useState(value);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebounceValue(value);
    }, time);
    return () => clearTimeout(timerId);
  }, [value]);

  return debounceValue;
}
