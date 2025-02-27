import { Route, Routes } from "react-router-dom";
import MainLayout from "./Layouts/MainLayout";
// import Header from "./components/Header";
import Bottomnav from "./components/Bottomnav";
import MakenavForm from "./components/MakenavForm";

const App = () => {
  return (
    <>
      {/* <Header /> */}

      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Bottomnav />} />
          <Route path="makenf" element={<MakenavForm />} />

          <Route path="*" element={<h2>Not Found</h2>} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
