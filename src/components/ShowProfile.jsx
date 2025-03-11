import {FaBirthdayCake, FaMapMarkerAlt, FaPhoneAlt} from "react-icons/fa";

const ShowProfile = ({ user }) => {
  return (
      <div className="max-w-lg mx-auto p-6">
          <div className="flex items-center justify-center mb-6">
              <img
                  src={user.profileImg || "/default_avatar.webp"}
                  alt="Profile"
                  className="w-30 h-30 rounded-full object-cover border-2 border-gray-300"
              />
              <div className="ml-4 text-center">
                  <h2 className="text-xl font-semibold text-gray-800">{user.username}</h2>
                  <p className="text-gray-500 text-sm">{user.email}</p>
              </div>
          </div>
          <hr className="border-t border-gray-200 mb-4"/>
          <div className="space-y-3 text-gray-700">
              <div className="flex items-center">
                  <FaPhoneAlt className="w-5 h-5 text-gray-500 mr-3"/>
                  <p className="text-sm">{user.phoneNumber || "Phone number not specified"}</p>
              </div>

              <div className="flex items-center">
                  <FaBirthdayCake className="w-5 h-5 text-gray-500 mr-3"/>
                  <p className="text-sm">{user.birthday ? new Date(user.birthday).toLocaleDateString() : "Date of birth not specified"}</p>
              </div>

              <div className="flex items-center">
                  <FaMapMarkerAlt className="w-5 h-5 text-gray-500 mr-3"/>
                  <p className="text-sm">
                      {user.address && (user.address.street || user.address.houseNumber || user.address.postalCode)
                          ? `${user.address.street || ""}${user.address.houseNumber ? `, ${user.address.houseNumber}` : ""}${user.address.postalCode ? `, ${user.address.postalCode}` : ""}`
                          : "Address not specified"}
                  </p>
              </div>
          </div>
      </div>
  );
};

export default ShowProfile;
