import { Routes, Route } from "react-router-dom";
import MainLayout from "./Layouts/MainLayout";
import CardDetails from "./components/CardDetails";
import CardList from "./components/CardList";
import CreateAdvertisement from "./components/CreateAdvertisement.jsx";
import Register from "./components/Register.jsx";
import Login from "./components/Login.jsx";
import Favorites from "./components/Favorites.jsx";
import Messages from "./components/Messages.jsx";
import Profile from "./components/Profile.jsx";
import ProtectedRoute from "./Layouts/ProtectedRoute.jsx";
import NotFound from "./components/NotFound.jsx";

const App = () => {
  return (
    <>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<CardList type="all"/>} />
            <Route path="/card/:id" element={<CardDetails />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />

            <Route element={<ProtectedRoute />}>
              <Route path="/ad" element={<CreateAdvertisement />} />
              <Route path="/favorites" element={<CardList type="favorites" />} />
              <Route path="/message" element={<Messages />} />
              <Route path="/profile" element={<Profile />} />
            </Route>

            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
    </>
  );
};
export default App;
