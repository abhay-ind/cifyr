// import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Pages/Home";
import React, { useState, useEffect } from "react";
import { connect, useSelector } from "react-redux";
import Titlebar from "./Components/Titlebar";
import Login from "./Pages/Login";
import CreatePost from "./Pages/CreatePost";
import Chat from "./Components/Chat1";
import {addComment,allTimeTopInvestors,createPost,createTransaction,createUser, getUserProfile, lastWeekTopInvestors, updateTransactionAddInvest} from "./Services/firebase/User";
import Post from "./Pages/Post";
import UserProfile from "./Pages/UserProfile";
import { LOGIN } from "./Store/userStore";
import TermsAndConditions from "./Components/TermsAndConditions";

// import Store from "./Store";
// console.log();
function App(props) {
  const user = useSelector((state) => state.user);
  console.log(user);
  addComment("Abhay",{CommentId:"sajas",comment:"hey"})
  createUser("Abhay",{DOB:"29-01-1999",ContactEmail:"abc@gmail.com",Name:"Abhay",isInvestor:false})
  console.log(getUserProfile("Abhay"))
  // createTransaction("Abjhas","Benefic1234","kjaskj",12921);
  updateTransactionAddInvest("Abjhas","absa",1212)
  updateTransactionAddInvest("Abjhas1","a2bsa",1202)
  updateTransactionAddInvest("Abjhas2","a3bsa",1202)
  createPost("Abhay1",{hello:"hi"})
  console.log(allTimeTopInvestors())
  console.log(lastWeekTopInvestors())
  
  const [startup, setStartup] = useState(true);
  useEffect(() => {
    if (startup) {
      if (localStorage.getItem("isLogin")) {
        // console.log('here lgoin')
        props.dispatch({
          type: LOGIN,
          payload: { token: localStorage.getItem("token") },
        });
      }
      setStartup(false);
    }
  }, [startup]);
  return (
    <React.Fragment>
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/">
              <Titlebar />
              <Home />
            </Route>
            <Route path="/terms&conditions">
              <TermsAndConditions />
            </Route>
            <Route path="/posts/:id">
              <Titlebar />
              <Post />
            </Route>

            {!user.isLogin && (
              <Route exact path="/login">
                <Titlebar />
                <Login />
              </Route>
            )}
            {user.isLogin && (
              <>
                <Route exact path="/post/create">
                  <Titlebar />
                  <CreatePost />
                </Route>

                <Route path="/user/profile">
                  <Titlebar />
                  <UserProfile />
                </Route>
              </>
            )}
            <Route>
              <Titlebar />
              <h3 className="m-3">404 not found</h3>
            </Route>
          </Switch>
        </Router>
        {/* <Chat></Chat> */}
        <svg id="my_dataviz" width="400" height="300"></svg>
      </div>
    </React.Fragment>
  );
}
const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(App);
