import { useState } from "react";

const Register = () => {
  const [username, setUsername] = useState("zhuxun");
  const [password, setPassword] = useState("zhuxun123");
  const [validatePassword, setValidatePassword] = useState("zhuxun123");
  const [error, setError] = useState(null);
  const handleRegisterBtn = () => {
    if (password !== validatePassword) {
      setError("Password must match.");
    } else {
      setError(null);
    }
  };
  return (
    <>
      <h1>Register</h1>
      {error && <div className="alert alert-danger">{error}</div>}
      <input
        className="form-control mb-2"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        className="form-control mb-2"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
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
