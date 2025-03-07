import {createRoot} from "react-dom/client";
import App from "./App.jsx";
import {BrowserRouter} from "react-router-dom";
import "./index.css";
import {AuthProvider} from "./context/AuthContext.jsx";
import {UserProvider} from "./context/UserContext.jsx";

createRoot(document.getElementById("root")).render(
    <BrowserRouter>
        <AuthProvider>
            <UserProvider>
                <App/>
            </UserProvider>
        </AuthProvider>
    </BrowserRouter>
);
