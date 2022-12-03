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
  findUserByUsernameThunk,
} from "./users-thunks";
import currentUser from "./current-user";

const usersReducer = createSlice({
  name: "users",
  initialState: {
    loading: true,
    users: [],
    currentUser: null,
    error: null,
    publicProfile: null,
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
    [findUserByUsernameThunk.fulfilled]: (state, action) => {
      state.publicProfile = action.payload;
    },
    [findAllUsersThunk.fulfilled]: (state, action) => {
      state.users = action.payload;
    },
    [loginThunk.fulfilled]: (state, action) => {
      state.currentUser = action.payload;
      state.loading = false;
    },
    [loginThunk.pending]: (state, action) => {
      state.currentUser = action.payload;
      state.loading = true;
    },
    [loginThunk.rejected]: (state, action) => {
      state.error = action.payload;
      state.currentUser = null;
      state.loading = false;
    },
    [logoutThunk.fulfilled]: (state, action) => {
      state.currentUser = null;
    },
    [registerThunk.fulfilled]: (state, action) => {
      state.currentUser = action.payload;
      state.loading = false;
    },
    [registerThunk.pending]: (state, action) => {
      state.currentUser = action.payload;
      state.loading = true;
    },
    [registerThunk.rejected]: (state, action) => {
      state.error = action.payload;
      state.currentUser = null;
      state.loading = false;
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
      const liked = action.payload.liked;
      console.log(state.users);
      state.publicProfile.likes.push(username);
      state.publicProfile = state.publicProfile;
    }
  },
});

export default usersReducer.reducer;
export const { updateProfile } = usersReducer.actions;
