import { useCallback, useState } from "react";

type useToggleType = [isOpen: boolean, toggle: () => void];

export default function useToggle(initialState = false): useToggleType {
  const [isOpen, setIsOpen] = useState(initialState);

  const toggle = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  return [isOpen, toggle];
}
