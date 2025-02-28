import { Routes, Route } from "react-router-dom";
import MainLayout from "./Layouts/MainLayout";
import CardDetails from "./components/CardDetails";
import CardList from "./components/CardList";
import Bottomnav from "./components/Bottomnav";

const App = () => {
  return (
    <Routes>
      {/* MainLayout applies only to the homepage */}
      <Route path="/" element={<MainLayout />}>
        <Route index element={<CardList />} />
      </Route>
      <Route path="/carddetails/:id" element={<CardDetails />} />
      <Route path="*" element={<h2>Not Found</h2>} />
      <Route index element={<Bottomnav />} />
      <Route path="*" element={<h2>Not Found</h2>} />
    </Routes>
  );
};

export default App;
