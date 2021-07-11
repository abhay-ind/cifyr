import { createSlice } from "@reduxjs/toolkit";

const initState = {
  posts: [],
};

export const postSlice = createSlice({
  name: "posts",
  initialState: initState,
  reducers: {
    UPDATE_POSTS: (state, action) => {
      // console.log("user details", state, action.payload);
      state = { ...state, ...action.payload };
      return state;
    },
  },
});
export const { UPDATE_POSTS } = postSlice.actions;

export default postSlice.reducer;
