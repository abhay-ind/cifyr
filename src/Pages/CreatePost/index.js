import React, { useState,useEffect } from "react";
import { Form, Button, Card, Col } from "react-bootstrap";
import convertor from "number-to-words";
import currencyToSymbolMap from "currency-symbol-map/map";
console.log(currencyToSymbolMap);
function CreatePost() {
  useEffect(()=>{
    window.onbeforeunload=()=>{
      console.log('unloaded')
    }
  },[])
  const [words, setWords] = useState("");
  return (
    <div className="d-flex justify-content-center align-items-center">
      <Form
        className="d-flex flex-column w-50 mt-5"
        onSubmit={(ev) => {
          ev.preventDefault();
          console.log("Submitted");
        }}
      >
        <Card className="p-4">
          <h3>Create Post</h3>
          <hr />
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Post Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Please enter a title"
              required
            />
            {/* <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text> */}
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Post Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={5}
              placeholder="Please enter a title"
              required
            />
            <Form.Text className="text-muted">
              Please provide enough information.
            </Form.Text>
          </Form.Group>
          <Form.Group>
            <Form.Label>Amount Required</Form.Label>
            <Col xs="auto" className="my-1 d-flex">
              <Form.Control
                as="select"
                className="mr-sm-2"
                id="inlineFormCustomSelect"
                custom
                style={{ flex: 1 }}
              >
                {Object.keys(currencyToSymbolMap).map((el, index) => (
                  <option value={index}>
                    {currencyToSymbolMap[el] + " [" + el + "]"}
                  </option>
                ))}
                {/* <option value="0">Choose...</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option> */}
              </Form.Control>
              <Form.Control
                type="number"
                // step=".1"
                min="1"
                defaultValue="1"
                style={{ flex: 5 }}
                onChange={(ev) => {
                  if (ev.target.value.length != 0)
                    setWords(convertor.toWords(ev.target.value));
                  else setWords("");
                }}
              ></Form.Control>
            </Col>
            <Form.Text className="text-muted">{words}</Form.Text>
          </Form.Group>
          <Form.Group>
            <Form.Label>Target Number of Days</Form.Label>
            <Form.Control type="number" defaultValue="50"></Form.Control>
          </Form.Group>
          <Form.Group className="d-flex align-items-center">
            <Form.Check />
            <Form.Text className="m-0">
              I accept the <span style={{color:'blue', textDecoration:'underline', cursor:'pointer'}} onClick={()=>{
                 window.open('/terms&conditions','Cifyr | Terms and Conditions','height=600,width=400');
              }} >terms and condtions</span></Form.Text>
          </Form.Group>
          <Button variant="primary" type="submit" className="align-self-end">
            Submit
          </Button>
          {/* </Form.Group> */}
        </Card>
      </Form>
      {/* TODO Terms and Conditions and custom image. */}
    </div>
  );
}

export default CreatePost;
