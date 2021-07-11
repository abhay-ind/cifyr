import React from "react";
import { Form, Button } from "react-bootstrap";
function CreatePost() {
  return (
    <div>
      <Form
        className="d-flex flex-column"
        onSubmit={(ev) => {
          ev.preventDefault();
          console.log("Submitted");
        }}
      >
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          {/* <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text> */}
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox" className="d-flex">
          <Form.Check
            type="checkbox"
            label="Stay Signed In"
            style={{ flex: 1 }}
          />
          <Button variant="primary" type="submit" className="align-self-end">
            Login
          </Button>
        </Form.Group>
      </Form>
    </div>
  );
}

export default CreatePost;
