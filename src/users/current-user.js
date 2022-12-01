import { useEffect, useState } from "react";
import {loginThunk, profileThunk} from "./users-thunks";
import { useDispatch, useSelector } from "react-redux";

const CurrentUser = ({ children }) => {
  const { currentUser } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loginThunk());
  }, []);
  return children;
};

export default CurrentUser;
