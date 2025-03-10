import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Searchbar from "../components/Searchbar";

const MainLayout = () => {
  return (
    <>
      <Header />
      <Searchbar />
      <div className=" pb-16">
        <Outlet />
      </div>
    </>
  );
};

export default MainLayout;
