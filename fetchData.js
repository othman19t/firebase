// **** #148
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
  })
  .then(() => {
    // from here it is promises #144 - #145
    console.log("data is saved");
  })
  .catch((e) => {
    console.log("error:", e);
  });

firebase
  .database()
  .ref("attibutes")
  .set({
    width: 20,
    heghit: 30,
  })
  .then(() => {
    // from here it is promises #144 - #145
    console.log("data is saved");
  })
  .catch((e) => {
    console.log("error:", e);
  });

firebase.database().ref().update({
  // with update we can do so many things
  job: "coder", // add data to the object
  "location/city": "New York", //change data in the object
  isSingle: null, //delete data from the object
});

// fetch data

firebase
  .database()
  .ref()
  .on("value", (snapshot) => {
    const val = snapshot.val();
    console.log(
      `${val.name} is a ${val.job} and he lives in ${val.location.city}`
    );
  });

// dont forget to import this file in the app.js => import "./firebase/firebase";
