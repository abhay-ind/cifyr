import React from "react";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
function Titlebar() {
  const user = useSelector((state) => state.user);

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Link to="/">
          <Navbar.Brand >Cifyr</Navbar.Brand>
        </Link>
        <Nav className="mr-auto">
          {/* <Nav.Link href="home">Home</Nav.Link>
          <Nav.Link href="features">Features</Nav.Link>
          <Nav.Link href="pricing">Pricing</Nav.Link> */}
        </Nav>
        {!user.isLogin && (
          <>
            <Link to="/login">
              <Button variant="info" className="mr-3">
                Login
              </Button>
            </Link>
            <Button variant="outline-info">Sign Up</Button>
          </>
        )}
      </Navbar>
    </>
  );
}

export default Titlebar;
