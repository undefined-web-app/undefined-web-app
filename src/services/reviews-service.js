import axios from "axios";

const API_BASE = "http://localhost:4000";
// const API_BASE = "https://undefined-server-app.herokuapp.com";
export const REVIEW_API = `${API_BASE}/review`;

export const findReviews = async () => {
  const response = await axios.get(REVIEW_API);
  const reviews = response.data;
  return reviews;
};

export const findReviewsByIMDBID = async (imdbID) => {
  var data = null;
  await axios
    .get(REVIEW_API, {
      params: {
        imdbID: imdbID, // This is the body part
      },
    })
    .then((response) => {
      data = response.data;
    });
  return data;
};

export const findReviewsByUserName = async (username) => {
  var data = null;
  await axios
    .get(REVIEW_API, {
      params: {
        username: username, // This is the body part
      },
    })
    .then((response) => {
      data = response.data;
    });
  return data;
};

export const createReview = async (review) => {
  const response = await axios.post(REVIEW_API, review);
  return response.data;
};

export const deleteReview = async (rid) => {
  const response = await axios.delete(`${REVIEW_API}/${rid}`);
  return response.data;
};
