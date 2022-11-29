import { useDispatch, useSelector } from "react-redux";
import ReviewSummaryListItem from "./review-item";
import { useEffect } from "react";
import { findReviewsThunk } from "../services/reviews-thunk";
import PostReview from "./review-post";

const ReviewSummaryList = ({title, username, imdbID, length}) => {
  // const { currentUser } = useSelector((state) => state.users);
  const { reviews, loading } = useSelector((state) => state.reviews);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(findReviewsThunk());
  }, []);
  const defaultCol = {
    username: "Username",
    content: "Review",
    score: "Score",
    time: "Posted On",
    imdbID: "IMDB ID"
  };
  return (
    <>
      {/*{currentUser && <h2>Welcome {currentUser.username}</h2>}*/}
      <ul className="list-group border border-primary mt-3">
        <li className="list-group-item fw-bold">
          <h4>{title}</h4>
        </li>
        {loading && <li className="list-group-item">Loading...</li>}
        {!loading && (
          <div>
            <ReviewSummaryListItem review={defaultCol} />
            {reviews.map((review) => (
                (review.username === username || review.imdbID === imdbID || (username === undefined && imdbID === undefined)) &&
              <ReviewSummaryListItem review={review} />
            )).slice(0, length)}
          </div>
        )}
      </ul>
      <PostReview/>
    </>
  );
};

export default ReviewSummaryList;
