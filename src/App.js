import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Pages/Home";
import React, { useState, useEffect } from "react";
import { connect, useSelector } from "react-redux";
import Titlebar from "./Components/Titlebar";
import Login from "./Pages/Login";
import CreatePost from "./Pages/CreatePost";
import Post from "./Pages/Post";
import UserProfile from "./Pages/UserProfile";
import { LOGIN } from "./Store/userStore";
import TermsAndConditions from "./Components/TermsAndConditions";

// import Store from "./Store";
// console.log();
function App(props) {
  const user = useSelector((state) => state.user);
  console.log(user);
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
      </div>
    </React.Fragment>
  );
}
const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(App);
