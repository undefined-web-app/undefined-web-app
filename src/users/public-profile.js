import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { findUserById } from "./users-service";
import {addLikeThunk, findUserByIdThunk, findUserByUsernameThunk} from "./users-thunks";
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
      if (publicProfile.likes.filter(e => e === currentUser.username).length > 0)
        return;
      if (currentUser.username === publicProfile.username)
        return;
    dispatch(addLikeThunk({liked: publicProfile.username, username: currentUser.username}));
    }
  };
  return (
    <>
      <h1>{publicProfile && publicProfile.username}'s Home {currentUser && publicProfile && currentUser.username !== publicProfile.username && <i onClick={clickHeart} className={publicProfile && publicProfile.likes.filter(e => e === currentUser.username).length > 0 ? 'fas fa-heart' : 'fal fa-heart'}></i>}</h1>
      {publicProfile && <LikedUsers users={publicProfile.likes}/>}
      {publicProfile && <ReviewSummaryList title="HIS/HER Reviews" username={publicProfile.username} type={publicProfile.type} disable={publicProfile.type === 'NORMAL_USER' ? 'Score' : undefined}/>}
    </>
  );
};

export default PublicProfile;
