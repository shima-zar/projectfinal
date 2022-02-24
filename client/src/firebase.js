import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBCxgbG8SSISW25f3hj453V6mqVCtqRGO0",
  authDomain: "wineder-application.firebaseapp.com",
  projectId: "wineder-application",
  storageBucket: "wineder-application.appspot.com",
  messagingSenderId: "344397823776",
  appId: "1:344397823776:web:2a5ed33be64e67f67c6145",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();

export default database;
