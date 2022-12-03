import { useDispatch, useSelector } from "react-redux";
import ReviewSummaryListItem from "./review-item";
import { useEffect } from "react";
import { findReviewsThunk } from "../services/reviews-thunk";

const ReviewSummaryList = ({ title, username, imdbID, length, type, disable }) => {
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
    imdbID: "IMDB",
  };
  if (type === "ADMIN") {
    return (<></>)
  }
  return (
    <>
      <ul className="list-group mt-3">
        <li className="list-group-item fw-bold">
          <h5>{title}</h5>
        </li>
        {loading && <li className="list-group-item">Loading...</li>}
        {!loading && (
          <div className="list-group-item">
            <div className="list-group">
              <ReviewSummaryListItem review={defaultCol} disable={disable} />
              {reviews
                .map(
                  (review, index) =>
                    ((review.username === username ||
                      review.imdbID === imdbID ||
                      (username === undefined && imdbID === undefined)) &&
                        review.type === type) && (
                      <ReviewSummaryListItem
                        key={index}
                        review={review}
                        disable={disable}
                      />
                    )
                )
                .slice(0, length)}
            </div>
          </div>
        )}
      </ul>
    </>
  );
};

export default ReviewSummaryList;
