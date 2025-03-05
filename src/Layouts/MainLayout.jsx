import { Outlet } from "react-router-dom";
import Header from "../components/Header";

import Nav from "../components/Nav";

const MainLayout = () => {
  return (
    <>
      <Header />
      <div>
        <Outlet />
        <Nav />
      </div>

      {/* <Footer /> */}
    </>
  );
};

export default MainLayout;
