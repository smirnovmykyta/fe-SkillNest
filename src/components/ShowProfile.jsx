const ShowProfile = ({ user }) => {
  return (
    <div className="text-center">
      <img
        src={user.profileImg?.[0] || "/default_avatar.webp"}
        alt="Profile"
        className="w-24 h-24 rounded-full mx-auto mb-4"
      />
      <h2 className="text-xl font-semibold">{user.username}</h2>
      <p className="text-gray-600">{user.email}</p>
      <p className="text-gray-600">{user.phoneNumber || "No phone number"}</p>
      <p className="text-gray-600">
        {user.birthday
          ? new Date(user.birthday).toLocaleDateString()
          : "No birthday"}
      </p>
      <p className="text-gray-600">
        {user.address?.street}, {user.address?.houseNumber},{" "}
        {user.address?.postalCode}
      </p>
    </div>
  );
};

export default ShowProfile;
