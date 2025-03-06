import axios from "axios";

export async function createAdvertisement(adData) {
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_SERVER_URL}/advertisement`,
      adData /*{
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

export async function getAllAdvertisement() {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_SERVER_URL}/advertisement`
    );

    return response.data;
  } catch (err) {
    alert("Something went wrong, please try again later.");
    console.error(err);
  }
}

export async function getAdvertisementById(adId) {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_SERVER_URL}/advertisement/${adId}`
    );

    return response.data;
  } catch (err) {
    // alert("Something went wrong, please try again later.")
    console.error(err);
  }
}

export async function updateAdvertisement(adId, adData) {
  try {
    const response = await axios.put(
      `${import.meta.env.VITE_SERVER_URL}/advertisement/${adId}`,
      adData /*{
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

export async function deleteAdvertisement(adId) {
  try {
    const response = await axios.delete(
      `${import.meta.env.VITE_SERVER_URL}/advertisement/${adId}` /*{
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

export async function getAdvertisementByUserId(userId) {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_SERVER_URL}/advertisement/user/${userId}`
    );

    return response.data;
  } catch (err) {
    alert("Something went wrong, please try again later.");
    console.error(err);
  }
}
