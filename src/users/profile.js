import { useDispatch, useSelector } from "react-redux";
import { findAllUsersThunk, loginThunk, logoutThunk } from "./users-thunks";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import ReviewSummaryList from "../review-summary-list";
import { findBookMarkThunk } from "../services/bookmark-thunk";
import UserDetail from "./user-detail";

const Profile = () => {
  const username = useParams().username;
  const randomNumber = Math.floor(Math.random() * 10);
  const navigate = useNavigate();
  const { currentUser, users } = useSelector((state) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(findAllUsersThunk());
  }, []);

  useEffect(() => {
    dispatch(loginThunk());
  }, []);

  const handleLogout = () => {
    dispatch(logoutThunk());
    navigate("/");
  };

  const { bookmark, loading } = useSelector((state) => state.bookmarks);
  useEffect(() => {
    if (currentUser) {
      dispatch(findBookMarkThunk(currentUser._id));
    }
  }, [currentUser]);

  return (
    <>
      {currentUser && <h2>Welcome {currentUser.username}</h2>}
      <div className="container">
        <UserDetail />
        {/*<div className="list-group">
          <div className="list-group-item">
            <div className="row">
              <div className="col-6">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_p8GBXlnS_LCaQrNVA_Y4Sqc0SYHJHrJdcAOc-FzSspzaReqRjcaAaVvB8CfYICIaPjA&usqp=CAU"
                  alt="Profile"
                />
              </div>
              <div className="col-6">
                <h5>Username: {currentUser && currentUser.username}</h5>
                <h5>Bio: {currentUser && currentUser.bio}</h5>
                <h5>First Name: {currentUser && currentUser.firstName}</h5>
                <h5>Last Name: {currentUser && currentUser.lastName}</h5>
                <h5>Email: {currentUser && currentUser.email}</h5>
                <Link to="/edit-profile">
                  <button className="btn btn-primary">Edit</button>
                </Link>
              </div>
            </div>
          </div>
        </div>*/}

        <div>
          <div className="list-group mt-4">
            <div className="list-group-item">
              <h5>Recommended users you might know</h5>
            </div>
            <div className="list-group-item">
              <ul className="list-group">
                {users.slice(randomNumber, randomNumber + 3).map((user) => (
                  <li className="list-group-item" key={user._id}>
                    {user.username}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {currentUser && (
          <ReviewSummaryList
            title={"Your Reviews"}
            username={currentUser.username}
          />
        )}

        <div>
          <div className="list-group mt-4">
            <div className="list-group-item">
              <h5>Book marks</h5>
              <ul className={"list-group"}>
                {bookmark.map((bookmark_item) => (
                  <li className={"list-group-item"}>
                    <a
                      className={"text-decoration-none"}
                      href={"/detail/" + bookmark_item.imdbID}
                    >
                      <div className={"row"}>
                        <div className={"col-1"}>
                          <img
                            className={"ms-2"}
                            src={bookmark_item.Poster}
                            height={100}
                          ></img>
                        </div>
                        <div className={"col-9 text-center"}>
                          <p className={"mt-3"}>
                            Movie title: {bookmark_item.title}
                          </p>
                          <p>Movie ID: {bookmark_item.imdbID}</p>
                        </div>
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
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
