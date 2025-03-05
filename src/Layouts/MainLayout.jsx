import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Searchbar from "../components/Searchbar";
import Bottomnav from "../components/Bottomnav";

const MainLayout = () => {
  return (
    <>
      <Header />
      <Searchbar />
      <div>
        <Outlet />
        <Bottomnav />
      </div>

      {/* <Footer /> */}
    </>
  );
};

export default MainLayout;
