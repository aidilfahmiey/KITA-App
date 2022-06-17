import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage'

const firebaseConfig = {
  apiKey: "xxxxxxxxxxxxxxxx",
  authDomain: "xxxxxxxxxxxxxxxx.firebaseapp.com",
  projectId: "xxxxxxxxxxxxxxxx",
  storageBucket: "xxxxxxxxxxxxxxxx.appspot.com",
  messagingSenderId: "xxxxxxxxxxxxxxxx",
  appId: "xxxxxxxxxxxxxxxx",
  measurementId: "G-xxxxxxxxxxxxxxxx"
};

let Firebase;

if (firebase.apps.length === 0) {
  Firebase = firebase.initializeApp(firebaseConfig);
}

export default Firebase;

