import { useAppSelector, useAppDispatch } from "../../hooks/rtk";
import getPaginationRange from "../../helpers/getPaginationRange";
import {
  setCurrentPage,
  setNextPage,
  setPrevPage,
} from "../../redux/slices/paginationSlice";
import { useCallback } from "react";
import ArrowLeft from "../../assets/Images/ArrowLeft.png";
import ArrowRight from "../../assets/Images/ArrowRight.png";
import styles from "./styles.module.css";

const Pagination = () => {
  const dispatch = useAppDispatch();
  const totalPages = useAppSelector((state) => state.pagination.totalPages);
  const currentPage = useAppSelector((state) => state.pagination.currentPage);
  const pagination = getPaginationRange(currentPage, totalPages);

  const handleSetPageClick = useCallback((page: number | string) => {
    if (typeof page === "number") {
      dispatch(setCurrentPage(page));
    }
  }, []);

  if (totalPages === 0) return null;

  return (
    <div className={styles.pagination_container}>
      <button
        className={styles.arrowBtn}
        onClick={() => dispatch(setPrevPage())}
        disabled={currentPage === 1}
      >
        <img src={ArrowLeft} alt="ArrowLeft" />
      </button>
      <ul className={styles.pagination_list}>
        {pagination.map((page) => (
          <li key={page}>
            <button
              onClick={() => handleSetPageClick(page)}
              disabled={typeof page === "string"}
              className={`${currentPage === page ? styles.pageBtnActive : styles.pageBtn}`}
            >
              {page}
            </button>
          </li>
        ))}
      </ul>
      <button
        className={styles.arrowBtn}
        onClick={() => dispatch(setNextPage())}
        disabled={currentPage === totalPages}
      >
        <img src={ArrowRight} alt="ArrowRight" />
      </button>
    </div>
  );
};

export default Pagination;
