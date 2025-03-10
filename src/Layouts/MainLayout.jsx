import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const MainLayout = () => {
  return (
    <>
      <Header />
      <div className=" pb-16">
        <Outlet />
      </div>
    </>
  );
};

export default MainLayout;
