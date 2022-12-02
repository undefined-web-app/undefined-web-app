import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { findBookMarkThunk } from "../services/bookmark-thunk";

const BookMarks = () => {
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.users);
  const { bookmark } = useSelector((state) => state.bookmarks);
  useEffect(() => {
    if (currentUser) {
      dispatch(findBookMarkThunk(currentUser._id));
    }
  }, [currentUser]);
  return (
    <>
      <div>
        <div className="list-group mt-4">
          <div className="list-group-item">
            <h5>Book marks</h5>
            <ul className={"list-group"}>
              {bookmark.map((bookmark_item) => (
                <li className={"list-group-item"}>
                  <a
                    className={"text-decoration-none"}
                    href={"/detail/" + bookmark_item.imdbID}
                  >
                    <div className={"row"}>
                      <div className={"col-1"}>
                        <img
                          className={"ms-2"}
                          src={bookmark_item.Poster}
                          height={100}
                        ></img>
                      </div>
                      <div className={"col-9 text-center"}>
                        <p className={"mt-3"}>
                          Movie title: {bookmark_item.title}
                        </p>
                        <p>Movie ID: {bookmark_item.imdbID}</p>
                      </div>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookMarks;
