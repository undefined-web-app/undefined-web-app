import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { findAllUsersThunk } from "./users-thunks";
import { Link } from "react-router-dom";

const RecommendedUser = () => {
  const dispatch = useDispatch();
  const randomNumber = Math.floor(Math.random() * 10);
  const { users } = useSelector((state) => state.users);
  useEffect(() => {
    dispatch(findAllUsersThunk());
  }, []);
  return (
    <>
      <div>
        <div className="list-group mt-4">
          <div className="list-group-item">
            <h5>Recommended users you might know</h5>
          </div>
          <div className="list-group-item">
            <ul className="list-group">
              {users.slice(randomNumber, randomNumber + 3).map((user) => (
                <li className="list-group-item" key={user._id}>
                  <Link to={"/profile/" + user.username}>{user.username}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default RecommendedUser;
