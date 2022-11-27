import axios from "axios";

const API_BASE = "https://undefined-server-app.herokuapp.com";
const REVIEW_API = `${API_BASE}/review`;

export const findReviews = async () => {
    const response = await axios.get(REVIEW_API);
    const reviews = response.data;
    return reviews;
}