import { updateUser } from "../api/userApi";
import { toast, ToastContainer } from "react-toastify";

const EditProfile = ({ user, setUser }) => {
  const submit = async (e) => {
    e.preventDefault();
    try {
      let updated = { ...user };
      for (const el of document.forms.profile.elements) {
        if (!el.name) continue;
        let valueHolder = updated;
        const parts = el.name.split(".");
        while (parts.length > 1) valueHolder = valueHolder[parts.shift()];
        const match = parts[0].match(/^(\w+)\[(\d+)\$/);
        if (match) {
          const [_, name, index] = match;
          valueHolder[name][parseInt(index)] = el.value;
        } else {
          valueHolder[parts[0]] = el.value;
        }
      }
      updated = await updateUser(updated);
      setUser(updated.data);
      toast.success("Profile update successfully!");
    } catch (error) {
      toast.error("Ops, failed to update profile, try again!");
      console.error("Error updating profile:", error);
    }
  };

  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} />
      <form name="profile" onSubmit={submit}>
        <div className="text-center">
          <img
            src={user.profileImg || "/default_avatar.webp"}
            alt="Profile"
            className="w-24 h-24 rounded-full mx-auto mb-4"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Profile image URL
          </label>
          <input
            type="text"
            name="profileImg"
            defaultValue={user.profileImg}
            className="w-full p-2 border rounded"
          />
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Username
            </label>
            <input
              type="text"
              defaultValue={user.username}
              disabled
              className="w-full p-2 border rounded bg-gray-100"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              defaultValue={user.email}
              disabled
              className="w-full p-2 border rounded bg-gray-100"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              value="********"
              disabled
              className="w-full p-2 border rounded bg-gray-100"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Phone Number
            </label>
            <input
              type="text"
              name="phoneNumber"
              defaultValue={user.phoneNumber ? user.phoneNumber : "01791237759"}
              className="w-full p-2 border rounded"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Birthday
            </label>
            <input
              type="date"
              name="birthday"
              defaultValue={
                user.birthday
                  ? new Date(user.birthday).toISOString().split("T")[0]
                  : null
              }
              className="w-full p-2 border rounded"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Street
            </label>
            <input
              type="text"
              name="address.street"
              defaultValue={
                user.address?.street
                  ? user.address?.street
                  : "Ecke Fidizin Platz"
              }
              className="w-full p-2 border rounded"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              House Number
            </label>
            <input
              type="text"
              name="address.houseNumber"
              defaultValue={
                user.address?.houseNumber ? user.address?.houseNumber : "33"
              }
              className="w-full p-2 border rounded"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Postal Code
            </label>
            <input
              type="text"
              name="address.postalCode"
              defaultValue={
                user.address?.postalCode ? user.address?.postalCode : "10963"
              }
              className="w-full p-2 border rounded"
            />
          </div>

          <div className="flex justify-end space-x-2 mt-4">
            <button
              className="px-4 py-2 bg-indigo-500 text-white rounded"
              type="submit"
            >
              Save changes
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default EditProfile;
