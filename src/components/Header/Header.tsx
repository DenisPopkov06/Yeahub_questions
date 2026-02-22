import { useMemo } from "react";
import Logo from "../../assets/Images/Logo.png";
import styles from "./styles.module.css";

const Header = () => {
  const navigateList = useMemo(
    () => ["База вопросов", "Тренажер", "Материалы"],
    [],
  );

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <nav className={styles.navigate}>
          <ul className={styles.list}>
            <li className={styles.list_item}>
              <img src={Logo} alt="logo" />
            </li>
            {navigateList.map((item) => (
              <li key={item} className={styles.list_item}>
                {item}
              </li>
            ))}
          </ul>
        </nav>
        <div className={styles.auth_btns}>
          <button className={styles.sign_in}>Вход</button>
          <button className={styles.sign_up}>Регистрация</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
