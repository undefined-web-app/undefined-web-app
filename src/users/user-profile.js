import UserDetail from "./user-detail";
import { useNavigate, useParams } from "react-router-dom";
import ReviewSummaryList from "../review-summary-list";
import { useDispatch, useSelector } from "react-redux";
import BookMarks from "./book-marks";
import { logoutThunk } from "./users-thunks";

const UserProfile = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const username = useParams();
  const { currentUser } = useSelector((state) => state.users);
  const handleLogout = () => {
    dispatch(logoutThunk());
    navigate("/");
  };
  return (
    <>
      <UserDetail username={username} />
      {currentUser && (
        <ReviewSummaryList
          title={"Your Reviews"}
          username={currentUser.username}
        />
      )}
      <BookMarks username={username} />
      <button className="btn btn-danger mt-4" onClick={handleLogout}>
        Logout
      </button>
    </>
  );
};

export default UserProfile;
