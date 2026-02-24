import Header from "../Header/Header";
import { Link } from "react-router-dom";
import arrow from "../../assets/Images/Arrow_question.png";
import styles from "./styles.module.css";

type MainLayoutProps = {
  children: React.ReactNode;
  path?: string;
  linkTitle?: string;
};

const MainLayout = ({ children, path, linkTitle }: MainLayoutProps) => {
  return (
    <>
      <Header />
      <main>
        {path && (
          <Link to={path} className={styles.link}>
            <img src={arrow} />
            <div>{linkTitle}</div>
          </Link>
        )}
        <div className="container">{children}</div>
      </main>
    </>
  );
};

export default MainLayout;
