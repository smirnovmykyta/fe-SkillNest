import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Cards from "../components/Cards";

const MainLayout = () => {
  return (
    <>
      <Header />
      <Cards />
      <Outlet />
    </>
  );
};

export default MainLayout;
