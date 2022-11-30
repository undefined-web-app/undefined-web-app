import {createSlice} from "@reduxjs/toolkit";
import {CreateBookMarkThunk, findBookMarkThunk} from "../services/bookmark-thunk";



const initialState = {
    bookmark: [],
    loading: false
};

const bookmarkSlice = createSlice({
                                     name: 'bookmarks',
                                      initialState,
                                      extraReducers: {
                                          [findBookMarkThunk.pending]:
                                              (state) => {
                                                  state.loading = true
                                                  state.bookmark = []
                                              },
                                          [findBookMarkThunk.fulfilled]:
                                              (state,  {payload} ) => {
                                                  state.loading = false
                                                  state.bookmark = payload
                                                  console.log(state.bookmark)
                                              },
                                          [findBookMarkThunk.rejected]:
                                              (state) => {
                                                  state.loading = false
                                              },
                                          [CreateBookMarkThunk.fulfilled]:
                                              (state, {payload}) => {
                                                state.loading = false
                                                state.bookmark.push(payload)
                                              }
                                      },

                                  });

export default bookmarkSlice.reducer;