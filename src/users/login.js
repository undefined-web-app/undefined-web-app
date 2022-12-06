import {useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginThunk } from "./users-thunks";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const { currentUser,loading } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const HandleLoginBtn = () => {
    setError(null);
    const loginUser = { username, password };
    dispatch(loginThunk(loginUser));
    console.log(loginUser);

    if(currentUser===null){
        setError("Username and Password didn't match");
        return;
    }

  };
    useEffect(()=>{
        console.log(currentUser);
        if(currentUser){
            navigate("/");
        }
    })
  return (
    <>
      <h1>Login</h1>
      {error && !loading && !currentUser && <div className="alert alert-danger">{error}</div>}
      <h5>Username</h5>
      <input
        className="form-control mb-2"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <h5>Password</h5>
      <input
        className="form-control mb-2"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={HandleLoginBtn} className="btn btn-primary w-100">
        Login
      </button>
      {currentUser && <h2>Welcome {currentUser.username}</h2>}
    </>
  );
};

export default Login;
