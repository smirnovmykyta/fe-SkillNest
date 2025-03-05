import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Searchbar from "../components/Searchbar";
import Nav from "../components/Nav";

const MainLayout = () => {
  return (
    <>
      <Header />
      <Searchbar />
      <div>
        <Outlet />
        <Nav />
      </div>

      {/* <Footer /> */}
    </>
  );
};

export default MainLayout;
