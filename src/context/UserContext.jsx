import { createContext, useContext, useEffect, useState } from "react";
import { getProfile } from "../api/userApi";

const UserContext = createContext();

export const useUser = () => {
  return useContext(UserContext);
};

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function profileData() {
      const res = await getProfile();
      setUser(res);
    }

    if (localStorage.getItem("token")) profileData();
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}
