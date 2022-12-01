import { useEffect, useState } from "react";
import * as service from "./users-service";
import { useDispatch, useSelector } from "react-redux";
import { deleteUserThunk, findAllUsersThunk } from "./users-thunks";

const UserList = () => {
  // const [users, setUsers] = useState([]);
  const { users } = useSelector((state) => state.users);
  const { currentUser } = useSelector((state) => state.users);
  /*const findAllUsers = async () => {
    const users = await service.findAllUsers();
    setUsers(users);
  };*/
  const dispatch = useDispatch();
  const deleteUserBtn = (id) => {
    dispatch(deleteUserThunk(id));
  };

  useEffect(() => {
    // findAllUsers();
    dispatch(findAllUsersThunk());
    // dispatch(deleteUserThunk());
  }, []);
  return (
    <>
      <h1>Users</h1>
      <h2>Hi, {currentUser.username}</h2>
      <ul className="list-group">
        {users.map((user) => (
          <li className="list-group-item" key={user._id}>
            {user.username}{" "}
            <button
              className="btn btn-danger float-end"
              onClick={() => deleteUserBtn(user._id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default UserList;
