import { useDispatch, useSelector } from "react-redux";
import { findAllUsersThunk, logoutThunk } from "./users-thunks";
import { Link, useNavigate } from "react-router-dom";
import {useEffect} from "react";
import ReviewSummaryList from "../review-summary-list";
import {findBookMarkThunk} from "../services/bookmark-thunk";


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

  const {bookmark,loading} = useSelector(state => state.bookmarks)
   useEffect(() => {
     dispatch(findBookMarkThunk(currentUser._id))
   }, [])

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
                  alt="Profile"/>
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

        <ReviewSummaryList title={'Your Reviews'} username={currentUser.username} />

        <div>
          <div className="list-group mt-4">
            <div className="list-group-item">
              <h5>Book marks</h5>
              <ul className={"list-group"}>
                {
                  bookmark.map(bookmark_item =>(
                      <li className={"list-group-item"}>
                        <a className={"text-decoration-none"} href={"/detail/"+bookmark_item.imdbID}>
                        <div className={"row"}>
                          <div className={"col-1"}>
                            <img className={"ms-2"} src={bookmark_item.Poster} height={100}></img>
                          </div>
                          <div className={"col-9 text-center"}>
                            <p className={"mt-3"}>
                              Movie title: { bookmark_item.title}
                            </p>
                            <p>
                              Movie ID: { bookmark_item.imdbID}
                            </p>
                          </div>
                        </div>
                        </a>
                      </li>
                  ))
                }
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
