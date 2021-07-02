import React from "react";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";

function Titlebar() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">Cifyr</Navbar.Brand>
        <Nav className="mr-auto">
          {/* <Nav.Link href="home">Home</Nav.Link>
          <Nav.Link href="features">Features</Nav.Link>
          <Nav.Link href="pricing">Pricing</Nav.Link> */}
        </Nav>
        <Button variant="info" className="mr-3" href="login">
          Login
        </Button>
        <Button variant="outline-info">Sign Up</Button>
      </Navbar>
    </>
  );
}

export default Titlebar;
