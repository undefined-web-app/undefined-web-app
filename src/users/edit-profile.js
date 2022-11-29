import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateProfile } from "./users-reducer";
import { useState } from "react";
import { updateUserThunk } from "./users-thunks";

const EditProfile = () => {
  const [bio, setBio] = useState();
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const navigate = useNavigate();
  const { currentUser } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const updateProfileHandler = () => {
    dispatch(updateUserThunk());
    navigate("/profile");
  };
  return (
    <>
      <h1>Edit Profile</h1>
      <Link to="/profile">
        <i className="fa fa-arrow-left" aria-hidden="true"></i>
      </Link>
      <button
        className="btn btn-primary rounded-pill float-end"
        onClick={updateProfileHandler}
      >
        Save
      </button>
      <div className="form-group pt-4">
        <label htmlFor="inputBio">Bio</label>
        <textarea
          className="form-control"
          id="inputBio"
          placeholder="Bio"
          value={bio}
          onChange={(e) => setBio(e.target.value)}
        />
      </div>
    </>
  );
};

export default EditProfile;