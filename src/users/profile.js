import { useDispatch, useSelector } from "react-redux";
import { current } from "@reduxjs/toolkit";
import { findAllUsersThunk, logoutThunk } from "./users-thunks";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Profile = () => {
  const navigate = useNavigate();
  const { currentUser } = useSelector((state) => state.users);
  const { users } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  useEffect(() => {
    // findAllUsers();
    dispatch(findAllUsersThunk());
  }, []);
  const handleLogout = () => {
    dispatch(logoutThunk());
    navigate("/");
  };
  return (
    <>
      <h1>Profile</h1>
      {currentUser && <h2>Welcome {currentUser.username}</h2>}
      <div className="container">
        <div className="list-group">
          <div className="list-group-item">
            <div className="row">
              <div className="col-6">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_p8GBXlnS_LCaQrNVA_Y4Sqc0SYHJHrJdcAOc-FzSspzaReqRjcaAaVvB8CfYICIaPjA&usqp=CAU"
                  alt="Profile"
                />
              </div>
              <div className="col-6">
                <h5>Username: {currentUser.username}</h5>
                <h5>Bio: {currentUser.bio}</h5>
                <h5>First Name: {currentUser.firstName}</h5>
                <h5>Last Name: {currentUser.lastName}</h5>
                <h5>Email: {currentUser.email}</h5>
                <Link to="/edit-profile">
                  <button className="btn btn-primary">Edit</button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="list-group mt-4">
            <div className="list-group-item">
              <h5>Recommended users you might know</h5>
            </div>
            <div className="list-group-item">
              <ul className="list-group">
                {users.slice(Math.random(), Math.random() + 3).map((user) => (
                  <li className="list-group-item" key={user._id}>
                    {user.username}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div>
          <div className="list-group mt-4">
            <div className="list-group-item">
              <h5>Book marks</h5>
            </div>
          </div>
        </div>
      </div>
      <button className="btn btn-danger mt-4" onClick={handleLogout}>
        Logout
      </button>
    </>
  );
};

export default Profile;
