import { Routes, Route } from "react-router-dom";
import MainLayout from "./Layouts/MainLayout";
import CardDetails from "./components/CardDetails";
import CardList from "./components/CardList";

const App = () => {
  return (
    <Routes>
      {/* MainLayout applies only to the homepage */}
      <Route path="/" element={<MainLayout />}>
        <Route index element={<CardList />} />
      </Route>

      {/* CardDetails should be a standalone page */}
      <Route path="/carddetails/:id" element={<CardDetails />} />

      {/* 404 Not Found Page */}
      <Route path="*" element={<h2>Not Found</h2>} />
    </Routes>
  );
};

export default App;
