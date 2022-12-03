import UserDetail from "./user-detail";
import { useNavigate } from "react-router-dom";
import ReviewSummaryList from "../review-summary-list";
import { useDispatch, useSelector } from "react-redux";
import BookMarks from "./book-marks";
import { logoutThunk } from "./users-thunks";
import React from "react";
import LikedUsers from "./liked-users";
import RecommendedUser from "./recommended-user";

const UserProfile = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.users);
  const handleLogout = () => {
    dispatch(logoutThunk());
    navigate("/");
  };
  return (
    <>
      <UserDetail />
      <RecommendedUser />
      {currentUser && <LikedUsers users={currentUser.likes} />}
      {currentUser && (
        <ReviewSummaryList
          title="Your Reviews"
          username={currentUser.username}
          type={currentUser.type}
          disable={currentUser.type === "NORMAL_USER" ? "Score" : undefined}
        />
      )}
      <BookMarks />
      <button className="btn btn-danger mt-4" onClick={handleLogout}>
        Logout
      </button>
    </>
  );
};

export default UserProfile;
