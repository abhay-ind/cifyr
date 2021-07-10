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
    LOGIN: (state, action) => {
      state.isLogin = true;
      localStorage.setItem("isLogin", true);
      localStorage.setItem("token", action.payload.token);
    },
    LOGOUT: (state, action) => {
      state.isLogin = false;
      localStorage.removeItem("isLogin")
      localStorage.removeItem("token")
      action.payload.history.push('/')
      // localStorage.setItem("isLogin", false);
      // localStorage.setItem("token", null);
    },
    UPDATE_USER_DETAILS: (state, action) => {
      state = { ...state, ...action.payload };
    },
  },
});
export const { LOGIN, LOGOUT, UPDATE_USER_DETAILS } = userSlice.actions;

export default userSlice.reducer;
