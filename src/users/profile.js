import { useSelector } from "react-redux";
import { current } from "@reduxjs/toolkit";

const Profile = () => {
  const { currentUser } = useSelector((state) => state.users);
  return (
    <>
      <h1>Profile</h1>
      {currentUser && <h2>Welcome {currentUser.username}</h2>}
    </>
  );
};

export default Profile;
