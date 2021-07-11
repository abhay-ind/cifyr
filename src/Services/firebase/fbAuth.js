// import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { LOGIN, LOGOUT, UPDATE_USER_DETAILS } from "../../Store/userStore";
import firebase from "firebase";
import firebaseConfig from "./fbConfig";

const provider = new firebase.auth.GoogleAuthProvider();
try {
  firebase.initializeApp(firebaseConfig);
} catch {
  console.log("firebase err");
}
export const googleSignIn = () => {
  return firebase.auth().signInWithPopup(provider);
};
