// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/app";
// If you are using v7 or any earlier version of the JS SDK, you should import firebase using namespace import
// import * as firebase from "firebase/app"

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/analytics";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyCHxlDCf0-YlR1R6e6Hl-Y2pRijVzDSnmg",
    authDomain: "abetterplace-20d41.firebaseapp.com",
    databaseURL: "https://abetterplace-20d41-default-rtdb.firebaseio.com",
    projectId: "abetterplace-20d41",
    storageBucket: "abetterplace-20d41.appspot.com",
    messagingSenderId: "263384631341",
    appId: "1:263384631341:web:8f915d0a0222e116b910a4",
    measurementId: "G-DLJ0HL3M5P"
  };
var fb=firebase.initializeApp(firebaseConfig);
export default fb;