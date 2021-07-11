import map from "currency-symbol-map/map";
import React from "react";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import { connect, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { LOGOUT } from "../Store/userStore";
import logo from "../res/images/logo_big.png"
function Titlebar(props) {
  const user = useSelector((state) => state.user);
  const history = useHistory();
  return (
    <>
      <Navbar id="titlebar" bg="dark" variant="dark" >
        <Link to="/">
          <Navbar.Brand><img src={logo} style={{width:80}}/></Navbar.Brand>
        </Link>
        <Nav className="mr-auto">
          {/* <Nav.Link href="home">Home</Nav.Link>
          <Nav.Link href="features">Features</Nav.Link>
          <Nav.Link href="pricing">Pricing</Nav.Link> */}
        </Nav>
        {!user.isLogin ? (
          <>
            <Link to="/login">
              <Button variant="info" className="mr-3">
                Login / Sign Up
              </Button>
            </Link>
          </>
        ) : (
          <>
            <Link to="/post/create">
              <Button variant="info" className="mr-3">
                Create Post
              </Button>
            </Link>
            <Link to="/user/profile">
              <Button variant="info" className="mr-3">
                My Profile
              </Button>
            </Link>
            <Link>
              <Button
                variant="info"
                className="mr-3"
                onClick={() => {
                  props.dispatch({
                    type: LOGOUT,
                    payload: { history: history },
                  });
                }}  
              >
                Logout
              </Button>
            </Link>
          </>
        )}
      </Navbar>
    </>
  );
}
const mapStateToProps = (state) => {
  return state;
};
export default connect(mapStateToProps)(Titlebar);
