import Header from "../components/Header/Header";
import { Outlet } from "react-router-dom"

const MainLayout = () => {
  return (
    <>
      <Header /> 
      <main className="container">
        <Outlet/>
      </main>
    </>
  );
};

export default MainLayout