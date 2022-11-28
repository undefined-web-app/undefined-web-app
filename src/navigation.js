import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router";
import { useSelector } from "react-redux";

const Navigation = () => {
  const { currentUser } = useSelector((state) => state.users);
  const { pathname } = useLocation();
  const parts = pathname.split("/");

  const screens = ["users"];
  if (currentUser) {
    screens.push("profile");
  } else {
    screens.push("login");
    screens.push("register");
  }
  return (
    <div className={"row mt-2"}>
      <div className={"col-11 h3"}>
        <Link to="/">Undefined Movies Review</Link>
      </div>
      <div className={"col-1 float-end"}>
        {/*<button className="btn btn-primary">
          <Link to="/register">
            <div className="text-white">Register</div>
          </Link>
        </button>
        <button className="btn btn-primary">
          <Link to="/login">
            <div className="text-white">Login</div>
          </Link>
        </button>
        <button className="btn btn-primary">
          <Link to="/profile">
            <div className="text-white">Profile</div>
          </Link>
        </button>*/}

        <ul className="nav nav-pills">
          <li className="nav-item">
            {/*<Link
              to="/"
              className={`nav-link ${parts[1] === "" ? "active" : ""}`}
            >
              Home
            </Link>*/}
          </li>
          {screens.map((screen) => (
            <li className="nav-item" key={Math.random()}>
              <Link
                to={`/${screen}`}
                className={`nav-link ${parts[1] === screen ? "active" : ""}`}
              >
                <span className="text-capitalize">{screen}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
