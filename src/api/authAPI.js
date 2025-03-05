import axios from "axios";

export const login = async (email, password) => {
  const formState = { email, password, withCredentials: true };
  let success = false;
  try {
    const res = await axios.post(import.meta.env.VITE_SERVER_URL, formState);
    const data = res.data;
    if (res.status !== 200) throw new Error(data.msg);
    // setUser(data.user); // Diese Funktion sollte in der Komponente aufgerufen werden
    // setIsAuthenticated(true); // Diese Funktion sollte in der Komponente aufgerufen werden
    localStorage.setItem("token", data.token); // Optional, wenn Sie Token verwenden

    success = true;
  } catch (error) {
    console.error(error.message);
  }
  return success;
};
// const logout
export const logout = () => {
  //   setIsAuthenticated(false);
  //   localStorage.removeItem("auth");
  // localStorage.removeItem("token");
};
// const register
export const register = () => {
  //   setIsAuthenticated(true);
  //   localStorage.setItem("auth", "true");
};
