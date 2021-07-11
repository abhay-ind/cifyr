// import { Button } from "bootstrap";
import React from "react";
import { Card, Form, Button } from "react-bootstrap";
import { useDispatch, connect } from "react-redux";
import {
  FacebookLoginButton,
  GoogleLoginButton,
  TwitterLoginButton,
} from "react-social-login-buttons";
import firebase from "firebase";
import { googleSignIn } from "../../Services/firebase/fbAuth";
import { LOGIN } from "../../Store/userStore";
var provider = new firebase.auth.FacebookAuthProvider();
function Login(props) {
  const dispatchLoginEvent = (token) => {
    //   useDispatch({ type: LOGIN });
    //   console.log("dispatched");
    //   // useDispatch({ type: LOGOUT });
    props.dispatch({ type: LOGIN, payload: { token } });
  };
  // console.log(props);
  return (
    <div
      className="d-flex w-100 justify-content-center align-items-center"
      style={{
        // background: "blue",
        height: "80vh",
      }}
    >
      <Card
        className="w-50 p-5"
        style={{
          boxShadow: `0 0 10px grey,
                    0 0 5px darkgrey`,
          width: "65%",
        }}
      >
        <Form
          // disabled
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

          <Form.Group className="d-flex mt-3">
            <GoogleLoginButton
              style={{
                width: "33%",
                fontSize: 13,
              }}
              onClick={() => {
                googleSignIn()
                  .then((result) => {
                    /** @type {firebase.auth.OAuthCredential} */
                    var credential = result.credential;

                    // This gives you a Google Access Token. You can use it to access the Google API.
                    var token = credential.accessToken;
                    // The signed-in user info.
                    var user = result.user;
                    // console.log(token,user)
                    // ...
                    dispatchLoginEvent(token);
                    console.log(user);
                  })
                  .catch((error) => {
                    // Handle Errors here.
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    // The email of the user's account used.
                    var email = error.email;
                    // The firebase.auth.AuthCredential type that was used.
                    var credential = error.credential;
                    // ...
                  });
              }}
            />
            <FacebookLoginButton
              style={{
                width: "33%",
                fontSize: 12,
              }}
              
              onClick={() => {
                firebase
                  .auth()
                  .signInWithPopup(new firebase.auth.FacebookAuthProvider())
                  .then((result) => {
                    if (result.credential) {
                      /** @type {firebase.auth.OAuthCredential} */
                      var credential = result.credential;

                      // This gives you a Facebook Access Token. You can use it to access the Facebook API.
                      var token = credential.accessToken;
                      // ...
                    }
                    dispatchLoginEvent(token);
                    // The signed-in user info.
                    var user = result.user;
                  })
                  .catch((error) => {
                    // Handle Errors here.
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    // The email of the user's account used.
                    var email = error.email;
                    // The firebase.auth.AuthCredential type that was used.
                    var credential = error.credential;
                    // ...
                  });
              }}
            />
            <TwitterLoginButton
              style={{
                width: "33%",
                fontSize: 12,
              }}
              onClick={() => {
                firebase
                  .auth()
                  .signInWithPopup(new firebase.auth.TwitterAuthProvider())
                  .then((result) => {
                    if (result.credential) {
                      /** @type {firebase.auth.OAuthCredential} */
                      var credential = result.credential;

                      // This gives you a Facebook Access Token. You can use it to access the Facebook API.
                      var token = credential.accessToken;
                      // ...
                    }
                    dispatchLoginEvent(token);
                    // The signed-in user info.
                    var user = result.user;
                  })
                  .catch((error) => {
                    // Handle Errors here.
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    // The email of the user's account used.
                    var email = error.email;
                    // The firebase.auth.AuthCredential type that was used.
                    var credential = error.credential;
                    // ...
                  });
              }}
            />
          </Form.Group>
        </Form>
      </Card>
    </div>
  );
}
const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(Login);
