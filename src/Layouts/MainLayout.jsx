import { Outlet } from "react-router-dom";
import Header from "../components/Header";


const MainLayout = () => {
  return (
    <>
      <Header />
      <div>
        <Outlet />
      </div>

      {/* <Footer /> */}
    </>
  );
};

export default MainLayout;
