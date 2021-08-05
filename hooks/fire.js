// database/firebaseDb.js

import firebase from "firebase";
import "@firebase/auth";
var firebaseConfig = {
  apiKey: "AIzaSyD120BMcO3BY38i7YomVnopKjKeEIoC1RA",
  authDomain: "kidszoo-249c2.firebaseapp.com",
  projectId: "kidszoo-249c2",
  storageBucket: "kidszoo-249c2.appspot.com",
  messagingSenderId: "501809217975",
  appId: "1:501809217975:web:abdea64493b68236d8e832",
  measurementId: "G-WR8QSQ7G2E",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
