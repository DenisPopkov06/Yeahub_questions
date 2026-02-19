import { createPortal } from "react-dom";
import styles from "./styles.module.css";
import { useCallback } from "react";

const Modal = () => {
  document.body.style.overflow = "hidden";

  const reload = useCallback(() => {
    window.location.reload()
  }, [])

  return createPortal(
    <>
      <div className={styles.modal_overlay} />
      <div className={styles.modal_container}>
        Что-то пошло не так. Попробуйте обновить страницу.
        <button onClick={reload} className={styles.modal_reloadBtn}>Обновить страницу</button>
      </div>
    </>,
    document.body,
  );
};

export default Modal;
