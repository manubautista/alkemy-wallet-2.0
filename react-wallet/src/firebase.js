// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app"
import 'firebase/compat/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyALEGUWh0Cbe-vhYybXgweTCsXco_6ul8o",
  authDomain: "alkemy-wallet.firebaseapp.com",
  databaseURL: "https://alkemy-wallet-default-rtdb.firebaseio.com",
  projectId: "alkemy-wallet",
  storageBucket: "alkemy-wallet.appspot.com",
  messagingSenderId: "1071798859163",
  appId: "1:1071798859163:web:25887281082be9b4f29d3e"
};


// Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);
export const db = fb.firestore();

