import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage'

const firebaseConfig = {
  apiKey: "AIzaSyA81R4XFu8dsDBxSg1HsVh_TELb_0TlbaE",
  authDomain: "kita-app-77a96.firebaseapp.com",
  projectId: "kita-app-77a96",
  storageBucket: "kita-app-77a96.appspot.com",
  messagingSenderId: "1091342418080",
  appId: "1:1091342418080:web:1e2b5f82d58bde68e109c5",
  measurementId: "G-R3YVTT8CFR"
};

let Firebase;

if (firebase.apps.length === 0) {
  Firebase = firebase.initializeApp(firebaseConfig);
}

export default Firebase;