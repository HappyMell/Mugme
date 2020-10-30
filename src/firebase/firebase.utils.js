import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDKq97wU5_aDTfpmTcA7bWUKNKNYnX3Y7U",
  authDomain: "mugme-3a22c.firebaseapp.com",
  databaseURL: "https://mugme-3a22c.firebaseio.com",
  projectId: "mugme-3a22c",
  storageBucket: "mugme-3a22c.appspot.com",
  messagingSenderId: "429290934350",
  appId: "1:429290934350:web:40942ec71d107dd1dd331f",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
