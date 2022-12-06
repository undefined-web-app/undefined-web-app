import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { current } from "@reduxjs/toolkit";

const UserDetail = ({ username }) => {
  const { currentUser } = useSelector((state) => state.users);
  return (
    <>
      <h1>{currentUser && currentUser.username} Profile</h1>
      <div className="list-group">
        <div className="list-group-item">
          <div className="row">
            <div className="col-xxl-6 col-xl-6 col-lg-6 d-none d-lg-block">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_p8GBXlnS_LCaQrNVA_Y4Sqc0SYHJHrJdcAOc-FzSspzaReqRjcaAaVvB8CfYICIaPjA&usqp=CAU"
                alt="Profile"
              />
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12">
              <h5>Username: {currentUser && currentUser.username}</h5>
              <h5>Bio: {currentUser && currentUser.bio}</h5>
              <h5>First Name: {currentUser && currentUser.firstName}</h5>
              <h5>Last Name: {currentUser && currentUser.lastName}</h5>
              <h5>Email: {currentUser && currentUser.email}</h5>
              <Link to="/edit-profile">
                <button className="btn btn-primary">Edit</button>
              </Link>
            </div>
            {/*<div className="col-xxl-1 col-xl-1 col-lg-1 col-md-1"></div>*/}
          </div>
        </div>
      </div>
    </>
  );
};

export default UserDetail;
