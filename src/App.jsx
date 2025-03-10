import { useEffect, useState } from "react";

import { Routes, Route, useNavigate } from "react-router-dom";
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
  // console.log("authenticated?", authenticated);
  const navigate = useNavigate();
  const [authenticated, setAuthenticated] = useState(true);
  useEffect(() => {
    if (localStorage.getItem("token")) {
      setAuthenticated(true);
    } else {
      navigate("/login");
    }
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<CardList />} />
          <Route path="/ad" element={<CreateAdvertisement />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/card/:id" element={<CardDetails />} />
          <Route path="/message" element={<Messages />} />
          <Route path="/profile" element={<Profile />} />

          <Route
            path="/register"
            element={<Register setAuthenticated={setAuthenticated} />}
          />
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </>
  );
};
export default App;
