import { Routes, Route } from "react-router-dom";
import MainLayout from "./Layouts/MainLayout";
import CardDetails from "./components/CardDetails";
import CardList from "./components/CardList";
import CreateAdvertisement from "./components/CreateAdvertisement.jsx";

const App = () => {
  return (
    <Routes>
      {/* MainLayout applies only to the homepage */}
      <Route path="/" element={<MainLayout />}>
        <Route index element={<CardList />} />
        <Route path="/carddetails/:id" element={<CardDetails />} />
          <Route path="/caform" element={<CreateAdvertisement />} />
        <Route path="*" element={<h2>Not Found</h2>} />
      </Route>
    </Routes>
  );
};

export default App;
