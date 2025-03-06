import { createContext, useContext, useState } from "react";
import { getUserById } from "../api/userApi";

const UserContext = createContext();

export const useUser = () => {
  return useContext(UserContext);
};

export function UserProvider({ children }) {
  const [user, setUser] = useState({ favoriteAdvertisements: [] });
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}
