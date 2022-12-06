import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addLikeThunk, findUserByUsernameThunk } from "./users-thunks";
import ReviewSummaryList from "../review-summary-list";
import LikedUsers from "./liked-users";

const PublicProfile = () => {
  const { username } = useParams();
  const { publicProfile, currentUser } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(findUserByUsernameThunk(username));
  }, [dispatch, username]);
  const clickHeart = () => {
    if (currentUser && publicProfile) {
      if (
        publicProfile.likes.filter((e) => e === currentUser.username).length > 0
      )
        return;
      if (currentUser.username === publicProfile.username) return;
      dispatch(
        addLikeThunk({
          liked: publicProfile.username,
          username: currentUser.username,
        })
      );
    }
  };
  return (
    <>
      <h1>
        {publicProfile && publicProfile.username}'s Home{" "}
        {currentUser &&
          publicProfile &&
          currentUser.username !== publicProfile.username && (
            <i
              onClick={clickHeart}
              className={
                publicProfile &&
                publicProfile.likes.filter((e) => e === currentUser.username)
                  .length > 0
                  ? "fas fa-heart"
                  : "fal fa-heart"
              }
            ></i>
          )}
      </h1>
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
              <h5>Username: {publicProfile && publicProfile.username}</h5>
              <h5>Bio: {publicProfile && publicProfile.bio}</h5>
              <h5>First Name: {publicProfile && publicProfile.firstName}</h5>
              <h5>Last Name: {publicProfile && publicProfile.lastName}</h5>
            </div>
          </div>
        </div>
      </div>

      {publicProfile && <LikedUsers users={publicProfile.likes} />}
      {publicProfile && (
        <ReviewSummaryList
          title="HIS/HER Reviews"
          username={publicProfile.username}
          type={publicProfile.type}
          disable={publicProfile.type === "NORMAL_USER" ? "Score" : undefined}
        />
      )}
    </>
  );
};

export default PublicProfile;
