import axios from "axios";

const BOOKMARK_API = "http://localhost:4000/bookmark";

export const createBookmark = async (bookmark) => {
  const response = await axios.post(BOOKMARK_API, bookmark);
  return response.data;
};
export const findBookmark = async () => {
  const response = await axios.get(BOOKMARK_API);
  const bookmark = response.data;
  return bookmark;
};
export const findBookmarkByUserId = async (userid) => {
  const response = await axios.get(`${BOOKMARK_API}/${userid}`);
  const bookmark = response.data;
  return bookmark;
};
export const deleteBookmark = async (bookmarkid) => {
  const response = await axios.delete(`${BOOKMARK_API}/${bookmarkid}`);
  return response;
};
