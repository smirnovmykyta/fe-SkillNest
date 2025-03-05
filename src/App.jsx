import { useState } from "react";

import { Routes, Route, useNavigate } from "react-router-dom";
import MainLayout from "./Layouts/MainLayout";
import CardDetails from "./components/CardDetails";
import CardList from "./components/CardList";
import CreateAdvertisement from "./components/CreateAdvertisement.jsx";
import Register from "./components/Register.jsx";
import Login from "./components/Login.jsx";
import Favorites from "./components/Favorites.jsx";

const App = () => {
  const [authenticated, setAuthenticated] = useState(true);
  const navigate = useNavigate();

  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<CardList />} />
        <Route path="/ad" element={<CreateAdvertisement />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/card/:id" element={<CardDetails />} />
      </Route>
    </Routes>
  );
};

export default App;
