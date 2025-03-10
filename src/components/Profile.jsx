import { useState } from "react";

const Profile = () => {
  const [err, setErr] = useState(null);

  const handleUpdate = async (e) => {
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
  };

  const handleDelete = async (adData) => {
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
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email:
            </label>
            <input
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name:
            </label>
            <input
              type="text"
              name="name"
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
          <button
            onClick={handleUpdate}
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default Profile;
