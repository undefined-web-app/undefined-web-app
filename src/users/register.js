import { useState } from "react";
import { useDispatch } from "react-redux";
import { registerThunk } from "./users-thunks";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [validatePassword, setValidatePassword] = useState("");
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const handleRegisterBtn = () => {
    if (password !== validatePassword) {
      setError("Password must match.");
      return;
    }
    setError(null);
    const newUser = { username, password };
    dispatch(registerThunk(newUser));
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
      <h5>Confirm password</h5>
      <input
        className="form-control mb-2"
        value={validatePassword}
        onChange={(e) => setValidatePassword(e.target.value)}
      />
      <button onClick={handleRegisterBtn} className="btn btn-primary w-100">
        Register
      </button>
    </>
  );
};

export default Register;