import { Route, Routes } from "react-router-dom";
import MainLayout from "./Layouts/MainLayout";
// import Header from "./components/Header";
import Bottomnav from "./components/Bottomnav";

const App = () => {
  return (
    <>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Bottomnav />} />
          <Route path="*" element={<h2>Not Found</h2>} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
