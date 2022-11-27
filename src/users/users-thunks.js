import { createAsyncThunk } from "@reduxjs/toolkit";
import { findAllUsers, register, login } from "./users-service";

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