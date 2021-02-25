import firebase from 'firebase' 

const firebaseConfig = {
  apiKey: "AIzaSyDLMRhQ5drSXYopQVVmvSsnhdqXR5h3ef8",
  authDomain: "slack-clone-challenge-6535d.firebaseapp.com",
  projectId: "slack-clone-challenge-6535d",
  storageBucket: "slack-clone-challenge-6535d.appspot.com",
  messagingSenderId: "491351211889",
  appId: "1:491351211889:web:16308fa22a011e33df80d0"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore(); //we initialize the database. firestore is the real database


export default db; //now we can use db everywhere