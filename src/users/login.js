import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginThunk } from "./users-thunks";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const handleLoginBtn = () => {
    setError(null);
    const loginUser = { username, password };
    dispatch(loginThunk(loginUser));
  };
  return (
    <>
      {error && <div className="alert alert-danger">{error}</div>}
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
      <button onClick={handleLoginBtn} className="btn btn-primary w-100">
        Login
      </button>
    </>
  );
};

export default Login;
