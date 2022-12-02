import { createSlice } from "@reduxjs/toolkit";
import {
  addLikeThunk,
  deleteUserThunk,
  findAllUsersThunk,
  loginThunk,
  logoutThunk,
  profileThunk,
  registerThunk,
  updateUserThunk,
} from "./users-thunks";
import currentUser from "./current-user";

const usersReducer = createSlice({
  name: "users",
  initialState: {
    loading: false,
    users: [],
    currentUser: null,
    error: null,
  },
  reducers: {
    updateProfile(state, action) {
      const updatedProfile = action.payload;
      const bio = updatedProfile.bio;
      const firstName = updatedProfile.firstName;
      const lastName = updatedProfile.lastName;
      const email = updatedProfile.email;
      return {
        ...state,
        bio,
        firstName,
        lastName,
        email,
      };
    },
  },
  extraReducers: {
    [findAllUsersThunk.fulfilled]: (state, action) => {
      state.users = action.payload;
    },
    [loginThunk.fulfilled]: (state, action) => {
      state.currentUser = action.payload;
    },
    [loginThunk.rejected]: (state, action) => {
      state.error = action.payload;
      state.currentUser = null;
    },
    [logoutThunk.fulfilled]: (state, action) => {
      state.currentUser = null;
    },
    [registerThunk.fulfilled]: (state, action) => {
      state.currentUser = action.payload;
    },
    [registerThunk.rejected]: (state, action) => {
      state.error = action.payload;
      state.currentUser = null;
    },
    [profileThunk.fulfilled]: (state, action) => {
      state.currentUser = action.payload;
    },
    [profileThunk.rejected]: (state, action) => {
      // state.error = action.payload;
      // state.currentUser = null;
    },
    [updateUserThunk.fulfilled]: (state, action) => {
      const payload = action.payload;
      state.loading = false;
      const userIdx = state.users.findIndex((u) => u._id === payload._id);
      state.users[userIdx] = {
        ...state.users[userIdx],
        ...payload,
      };
      state.currentUser = state.users[userIdx];
    },
    [deleteUserThunk.fulfilled]: (state, action) => {
      state.loading = false;
      state.users = state.users.filter((u) => u._id !== action.payload);
    },
    [addLikeThunk.fulfilled]: (state, action) => {
      const username = action.payload.username;
      const uid = action.payload.uid;
      const userIdx = state.users.findIndex((u) => u._id === payload._id);
      state.users[userIdx].likes.push(username);
      state.currentUser = state.users[userIdx];
    }
  },
});

export default usersReducer.reducer;
export const { updateProfile } = usersReducer.actions;
