import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  findAllUsers,
  register,
  login,
  profile,
  logout,
  updateUser,
  deleteUser,
  findUserByUsername,
} from "./users-service";

export const findAllUsersThunk = createAsyncThunk(
  "findAllUsers",
  async () => await findAllUsers()
);

export const registerThunk = createAsyncThunk(
  "register",
  async (user) => await register(user)
);

export const loginThunk = createAsyncThunk(
  "login",
  async (user) => await login(user)
);

export const logoutThunk = createAsyncThunk(
  "logout",
  async () => await logout()
);

export const profileThunk = createAsyncThunk(
  "profile",
  async () => await profile()
);

export const updateUserThunk = createAsyncThunk(
  "updateUser",
  async (userUpdates) => await updateUser(userUpdates)
);

export const deleteUserThunk = createAsyncThunk(
  "deleteUser",
  async (uid) => await deleteUser(uid)
);

export const findUserByUsernameThunk = createAsyncThunk(
  "findUserByUsername",
  async (username) => await findUserByUsername(username)
);
