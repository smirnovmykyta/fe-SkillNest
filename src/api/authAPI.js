import axios from "axios";

export const registration = async (email, password, username) => {
  try {
    const res = await axios.post(`${import.meta.env.VITE_SERVER_URL}/auth/signup`, {email, password, username});
    const data = res.data;
    if (res.status !== 201) throw new Error(data.msg);
    return data.msg;
  } catch (error) {
    console.error(error.message);
  }
};

export const login = async (email, password) => {
  try {
    const res = await axios.post(`${import.meta.env.VITE_SERVER_URL}/auth/login`, {email, password});
    const data = res.data;
    if (res.status !== 200) return res;
    localStorage.setItem("token", data.token);
    localStorage.setItem("userId", data.user._id);
    localStorage.setItem("isAuth", JSON.stringify(true));
    return res;
  } catch (error) {
    console.error(error.message);
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
    if (res.status !== 200) throw new Error(data.msg);
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    localStorage.removeItem("isAuth");
    return data;
  } catch (error) {
    console.error(error.message);
  }
};
