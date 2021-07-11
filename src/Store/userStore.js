import { createSlice } from "@reduxjs/toolkit";

const initState = {
  username: "",
  displayName: "",
  isInvestor: undefined,
  isLogin: false,
  imgUrl: undefined,
  token: undefined,
  uid: "",
  email:"",
};

export const userSlice = createSlice({
  name: "user",
  initialState: initState,
  reducers: {
    LOGIN: (state, action) => {
      // console.log('in login')
      state.isLogin = true;
      state.uid = action.payload.uid;
      state.token = action.payload.token;
      state.displayName = action.payload.displayName;
      state.email = action.payload.email;
      localStorage.setItem("isLogin", true);
      localStorage.setItem("token", action.payload.token);
      localStorage.setItem("uid", action.payload.uid);
      localStorage.setItem("displayName", action.payload.displayName);
      localStorage.setItem("email", action.payload.email);

      // return state;
    },
    LOGOUT: (state, action) => {
      state.isLogin = false;
      localStorage.removeItem("isLogin");
      localStorage.removeItem("token");
      localStorage.removeItem("uid");
      localStorage.removeItem("displayName");
      localStorage.removeItem("email");
      action.payload.history.push("/");
      // localStorage.setItem("isLogin", false);
      // localStorage.setItem("token", null);
    },
    UPDATE_USER_DETAILS: (state, action) => {
      // console.log("user details",state,action.payload)
      state = { ...state, ...action.payload };
      localStorage.setItem("displayName", action.payload.displayName);
      // return state;
    },
  },
});
export const { LOGIN, LOGOUT, UPDATE_USER_DETAILS } = userSlice.actions;

export default userSlice.reducer;
