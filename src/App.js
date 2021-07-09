import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Pages/Home";
import React from "react";
import { useSelector } from "react-redux";
import Titlebar from "./Components/Titlebar";
import Login from "./Pages/Login";
import ChatSystem from "./Components/Chat";
import CreatePost from "./Pages/CreatePost";
// import Store from "./Store";
// console.log();
function App() {
  const user = useSelector((state) => state.user);
  console.log(user);
  return (
    <React.Fragment>
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/">
              <Titlebar />
              <Home />
              <ChatSystem />
            </Route>
            <Route exact path="/login">
              <Titlebar />

              <Login />
            </Route>
            <Route exact path="/post/create">
              <Titlebar />

              <CreatePost />
            </Route>
            <Route>
              <h3>404 not found</h3>
            </Route>
          </Switch>
        </Router>
      </div>
    </React.Fragment>
  );
}

export default App;
