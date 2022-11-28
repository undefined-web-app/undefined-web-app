import axios from "axios";

const API_BASE = "https://undefined-server-app.herokuapp.com";
const REVIEW_API = `${API_BASE}/review`;

export const findReviews = async () => {
    const response = await axios.get(REVIEW_API);
    const reviews = response.data;
    return reviews;
}

export const findReviewsByIMDBID = async (imdbID) => {
    await axios.get( REVIEW_API,{
        params: {
            imdbID: imdbID // This is the body part
        }
    }).then(response => {
        console.log(response.data);
        return response.data;
    });
}

export const findReviewsByUserName = async (username) => {
    await axios.get( REVIEW_API,{
        params: {
            username: username // This is the body part
        }
    }).then(response => {
        console.log(response.data);
        return response.data;
    });
}

export const createReview = async () => {

}