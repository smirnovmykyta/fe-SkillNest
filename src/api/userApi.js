import axios from "axios";

export async function createUser(userData) {
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_SERVER_URL}/user`,
      userData /*{
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        }*/
    );
    return response.data;
  } catch (err) {
    alert("Something went wrong, please try again later.");
    console.error(err);
  }
}

export async function getAllUser() {
  try {
    const response = await axios.get(`${import.meta.env.VITE_SERVER_URL}/user`);

    return response.data;
  } catch (err) {
    alert("Something went wrong, please try again later.");
    console.error(err);
  }
}

export async function getUserById(userId) {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_SERVER_URL}/user/${userId}`
    );

    return response.data;
  } catch (err) {
    // alert("Something went wrong, please try again later.");
    console.error(err);
  }
}

export async function updateUser(userId, userData) {
  try {
    const response = await axios.put(
      `${import.meta.env.VITE_SERVER_URL}/user/${userId}`,
      userData /*{
            // headers: {
            //     Authorization: `Bearer ${localStorage.getItem("token")}`,
            // },
        }*/
    );

    return response.data;
  } catch (err) {
    alert("Something went wrong, please try again later.");
    console.error(err);
  }
}

export async function deleteUser(userId) {
  try {
    const response = await axios.delete(
      `${import.meta.env.VITE_SERVER_URL}/user/${userId}` /*{
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        }*/
    );

    return response.data;
  } catch (err) {
    alert("Something went wrong, please try again later.");
    console.error(err);
  }
}
