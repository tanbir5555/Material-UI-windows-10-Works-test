// import React from 'react'
import * as firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBUE2TQM5khdTb9vcbBkQYqOVujaR_OYTk",
  authDomain: "todo-app-cp-9ca9b.firebaseapp.com",
  databaseURL: "https://todo-app-cp-9ca9b-default-rtdb.firebaseio.com",
  projectId: "todo-app-cp-9ca9b",
  storageBucket: "todo-app-cp-9ca9b.appspot.com",
  messagingSenderId: "999082076512",
  appId: "1:999082076512:web:def7977569dfca904cd605",
  measurementId: "G-3Z4ZDWFQCX"
};

  let FirebaseApp= firebase.initializeApp(firebaseConfig);

  let db = FirebaseApp.database();
  export default db
