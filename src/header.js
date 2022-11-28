import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className={"row mt-2 mb-2"}>
      <div className={"col-11"}>
        <Link to="/">Undefined Movies Review</Link>
      </div>
      <div className={"col-1 float-end"}>
        <button className="btn btn-primary btn-sm">
          <Link to="/register">
            <div className="text-white">Login/Register</div>
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Header;
