import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { findUserById } from "./users-service";
import { findUserByIdThunk, findUserByUsernameThunk } from "./users-thunks";

const PublicProfile = () => {
  const { username } = useParams();
  const { publicProfile } = useSelector((state) => state.users);
  console.log(publicProfile);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(findUserByUsernameThunk(username));
    // dispatch(findUserByIdThunk(username));
  }, [dispatch, username]);
  return (
    <>
      <h1>{username} Profile</h1>
      <h1>{publicProfile && publicProfile.username}</h1>
    </>
  );
};

export default PublicProfile;
