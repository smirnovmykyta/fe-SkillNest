import { useState } from "react";

import { Routes, Route, useNavigate, Re } from "react-router-dom";
import MainLayout from "./Layouts/MainLayout";
import CardDetails from "./components/CardDetails";
import CardList from "./components/CardList";
import CreateAdvertisement from "./components/CreateAdvertisement.jsx";
import Register from "./components/Register.jsx";
import Login from "./components/Login.jsx";
import Favorites from "./components/Favorites.jsx";
import Messages from "./components/Messages.jsx";
import Profile from "./components/Profile.jsx";

const App = () => {
  const [authenticated, setAuthenticated] = useState(true);
  const navigate = useNavigate();

  return (
    <>
      {authenticated ? (
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<CardList />} />
            <Route path="/ad" element={<CreateAdvertisement />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/card/:id" element={<CardDetails />} />
            <Route path="/message" element={<Messages />} />
            <Route path="/profile" element={<Profile />} />

            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
          </Route>
        </Routes>
      ) : (
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      )}
    </>
  );
};
export default App;
