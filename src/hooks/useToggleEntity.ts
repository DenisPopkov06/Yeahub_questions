import { useAppDispatch } from "./rtk";
import type { ActionCreatorWithPayload } from "@reduxjs/toolkit";
import { useCallback } from "react";
import { setCurrentPage } from "../redux/slices/paginationSlice";
import useToggle from "./useToggle";

type useToggleEntityType = [boolean, () => void];

export default function useToggleEntity(
  id: number,
  addId: ActionCreatorWithPayload<number>,
  removeId: ActionCreatorWithPayload<number>,
): useToggleEntityType {
  const [isActive, toggle] = useToggle(false);
  const dispatch = useAppDispatch();

  const handleClick = useCallback(() => {
    if (isActive) {
      dispatch(removeId(id));
    } else {
      dispatch(addId(id));
    }
    toggle();
    dispatch(setCurrentPage(1))
  }, [isActive, removeId, addId]);
  return [isActive, handleClick];
}
