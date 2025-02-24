import { Route, Routes } from "react-router-dom";
import MainLayout from "./Layouts/MainLayout";
import HomePage from "./components/HomePage";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />

          <Route path="*" element={<h2>Not Found</h2>} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
