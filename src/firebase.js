import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAPpHRGpO0fKk13NKHqqZ9UZfnZhNP5Xk0",
    authDomain: "clatsapp.firebaseapp.com",
    projectId: "clatsapp",
    storageBucket: "clatsapp.appspot.com",
    messagingSenderId: "973102943536",
    appId: "1:973102943536:web:6f502d0427a8e533488cf5",
    measurementId: "G-69CBSVF5QQ"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;