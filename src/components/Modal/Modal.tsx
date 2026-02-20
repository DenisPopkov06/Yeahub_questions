import { createPortal } from "react-dom";
import styles from "./styles.module.css";
import { useCallback, useEffect } from "react";

const Modal = () => {
  
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  const reload = useCallback(() => {
    window.location.reload();
  }, []);

  return createPortal(
    <>
      <div className={styles.modal_overlay} />
      <div className={styles.modal_container}>
        Что-то пошло не так. Попробуйте обновить страницу.
        <button onClick={reload} className={styles.modal_reloadBtn}>
          Обновить страницу
        </button>
      </div>
    </>,
    document.body,
  );
};

export default Modal;
