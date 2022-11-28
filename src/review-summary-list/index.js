import { useDispatch, useSelector } from "react-redux";
import ReviewSummaryListItem from "./review-item";
import { useEffect } from "react";
import { findReviewsThunk } from "../services/reviews-thunk";

const ReviewSummaryList = () => {
  // const { currentUser } = useSelector((state) => state.users);
  const { reviews, loading } = useSelector((state) => state.reviews);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(findReviewsThunk());
    // eslint-disable-next-line
  }, []);
  const defaultCol = {
    username: "Username",
    content: "Review",
    score: "Score",
    time: "Posted On",
  };
  return (
    <>
      {/*{currentUser && <h2>Welcome {currentUser.username}</h2>}*/}
      <ul className="list-group border border-primary mt-3">
        <li className="list-group-item fw-bold">
          <h4>Recent Hot Reviews</h4>
        </li>
        {loading && <li className="list-group-item">Loading...</li>}
        {!loading && (
          <div>
            <ReviewSummaryListItem review={defaultCol} />
            {reviews.map((review) => (
              <ReviewSummaryListItem review={review} />
            ))}
          </div>
        )}
      </ul>
    </>
  );
};

export default ReviewSummaryList;
