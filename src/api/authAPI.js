import axios from "axios";

export const registration = async (email, password, username) => {
  try {
   return await axios.post(`${import.meta.env.VITE_SERVER_URL}/auth/signup`, {email, password, username});
  } catch (error) {
    console.error(error.message);
    return error.response;
  }
};

export const login = async (email, password) => {
  try {
    const res = await axios.post(`${import.meta.env.VITE_SERVER_URL}/auth/login`, {email, password});
    const data = res.data;
    localStorage.setItem("token", data.token);
    localStorage.setItem("isAuth", JSON.stringify(true));
    return res;
  } catch (error) {
    console.error(error.message);
    return error.response;
  }
};

export const logout = async () => {
  try {
    const res = await axios.post(`${import.meta.env.VITE_SERVER_URL}/auth/logout`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    const data = res.data;
    localStorage.removeItem("token");
    localStorage.removeItem("isAuth");
    return data;
  } catch (error) {
    console.error(error.message);
  }
};
