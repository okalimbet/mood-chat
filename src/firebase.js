// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAA6bNoGL1mn5IUVjzV7fzkCXws4n2gHpo",
  authDomain: "mood-chat-16131.firebaseapp.com",
  projectId: "mood-chat-16131",
  storageBucket: "mood-chat-16131.appspot.com",
  messagingSenderId: "952197904462",
  appId: "1:952197904462:web:d2c4bac29a1d62baee6b1f",
  measurementId: "G-1J55SMGH6K"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;