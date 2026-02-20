import Header from "../components/Header/Header";
import { Outlet } from "react-router-dom"
import styles from "./styles.module.css"

const MainLayout = () => {
  return (
    <>
      <Header /> 
      <main className={`${styles.main} container`}>
        <Outlet/>
      </main>
    </>
  );
};

export default MainLayout