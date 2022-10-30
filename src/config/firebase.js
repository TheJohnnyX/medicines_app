import firebase from "firebase"
import 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyBulPD7hQAHGInAkSTyTdwspsTAJpFUj8w",
  authDomain: "medicines-61ab9.firebaseapp.com",
  projectId: "medicines-61ab9",
  storageBucket: "medicines-61ab9.appspot.com",
  messagingSenderId: "457882526236",
  appId: "1:457882526236:web:5909eb231b023e44af75d9",
  measurementId: "G-GKP8GW1MS1"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.firestore();
export default database