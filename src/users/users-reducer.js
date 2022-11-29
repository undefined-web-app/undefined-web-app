import { createSlice } from "@reduxjs/toolkit";
import {
  findAllUsersThunk,
  loginThunk,
  logoutThunk,
  profileThunk,
  registerThunk,
  updateUserThunk,
} from "./users-thunks";

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
      state.error = action.payload;
      state.currentUser = null;
    },
    [updateUserThunk.fulfilled]: (state, action) => {
      state.currentUser = action.payload;
    },
  },
});

export default usersReducer.reducer;
export const { updateProfile } = usersReducer.actions;
