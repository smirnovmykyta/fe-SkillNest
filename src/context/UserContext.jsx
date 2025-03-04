// import { createContext, useContext, useState } from "react";
// import { getUserById } from "../api/userApi";

// const UserContext = createContext();

// export const useUser = () => {
//   return useContext(UserContext);
// };

// export function UserProvider({ children }) {
//   const [user, setUser] = useState({ favoriteAdvertisements: [] });
//   return (
//     <UserContext.Provider value={{ user, setUser }}>
//       {children}
//     </UserContext.Provider>
//   );
// }

import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem("auth")
  );

  const login = () => {
    setIsAuthenticated(true);
    localStorage.setItem("auth", "true");
  };

  const logout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("auth");
    localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
