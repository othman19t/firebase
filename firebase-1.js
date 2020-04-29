import * as firebase from "firebase";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAA7-ma-ZOjAqWW3aeIp4gYDB71fv8XhVQ",
  authDomain: "test1-c20ad.firebaseapp.com",
  databaseURL: "https://test1-c20ad.firebaseio.com",
  projectId: "test1-c20ad",
  storageBucket: "test1-c20ad.appspot.com",
  messagingSenderId: "8850186323",
  appId: "1:8850186323:web:4c264ac3bd287545e1e6a6",
  measurementId: "G-1FCZ2Q1K0Y",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

firebase
  .database()
  .ref()
  .set({
    name: "Othman",
    age: 26,
    isSingle: true,
    location: {
      city: "Vancouver",
      country: "Canada",
    },
  });

// dont forget to import this file in the app.js => import "./firebase/firebase";
