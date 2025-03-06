import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Searchbar from "../components/Searchbar";
// import NavbarEdited from "../components/NavbarEdited";
// import Bottomnav from "../components/Bottomnav";

const MainLayout = () => {
  return (
    <>
      <Header />
      <Searchbar />
      <div className=" pb-16">
        <Outlet />
      </div>
      {/* <NavbarEdited /> */}
      {/* <Bottomnav /> */}
      {/* <Footer /> */}
    </>
  );
};

export default MainLayout;
