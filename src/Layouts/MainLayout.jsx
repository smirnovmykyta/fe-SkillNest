import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const MainLayout = () => {
  return (
    <>
      <Outlet />
      <Header />
    </>
  );
};

export default MainLayout;
