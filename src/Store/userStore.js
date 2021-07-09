import { createSlice } from "@reduxjs/toolkit";

const initState = {
  username: "",
  firstName: "",
  lastName: "",
  isInvestor: undefined,
  isLogin: false,
  imgUrl: undefined,
  token: undefined,
};

// export const LOGIN = "LOGIN";
// export const LOGOUT = "LOGOUT";
// export const UPDATE_USER_DETAILS = "UPDATE_USER_DETAILS";

const userReducer = (state = initState, action) => {
  switch (action) {
    case action.type == LOGIN:
      localStorage.setItem("isLogin", true);
      localStorage.setItem('token',action.payload.token)
      return { ...state, isLogin: true };
    case action.type == LOGOUT:
      return { ...state, isLogin: false };
    case action.type == UPDATE_USER_DETAILS:
      return { ...state, ...action.payload };
  }
};

export const userSlice = createSlice({
  name: "user",
  initialState: initState,
  reducers: {
    LOGIN: (state) => {
      state.isLogin = true;
    },
    LOGOUT: (state) => {
      state.isLogin = false;
    },
    UPDATE_USER_DETAILS: (state, action) => {
      state = { ...state, ...action.payload };
    },
  },
});
export const { LOGIN, LOGOUT, UPDATE_USER_DETAILS } = userSlice.actions;

export default userSlice.reducer;
