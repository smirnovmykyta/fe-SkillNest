import { Route, Routes } from "react-router-dom";
import MainLayout from "./Layouts/MainLayout";
import Header from "./components/Header";
import Bottomnav from "./components/Bottomnav";
import Login from "./components/Login";

const App = () => {
  return (
    <>
      {/* <Header /> */}

      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Bottomnav />} />
          <Route path="login" element={<Login />} />

          <Route path="*" element={<h2>Not Found</h2>} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
