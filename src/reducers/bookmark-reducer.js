import {createSlice} from "@reduxjs/toolkit";
import { findBookMarkThunk1} from "../services/bookmark-thunk";


const initialState = {
    bookmark: [],
    loading: false
};

const bookmarkSlice = createSlice({
                                     name: 'bookmarks',
                                      initialState,
                                      extraReducers: {
                                          [findBookMarkThunk1.pending]:
                                              (state) => {
                                                  state.loading = true
                                                  state.bookmark = []
                                              },
                                          [findBookMarkThunk1.fulfilled]:
                                              (state, { payload }) => {
                                                  state.loading = false
                                                  state.bookmark = payload
                                              },
                                          [findBookMarkThunk1.rejected]:
                                              (state) => {
                                                  state.loading = false
                                              }
                                      },

                                  });

export default bookmarkSlice.reducer;