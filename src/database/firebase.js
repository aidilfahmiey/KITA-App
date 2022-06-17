import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage'

const firebaseConfig = {
  apiKey: "AIzaSyBBxTUv4zkv0DdOu9YF6i9Zd_voDZuWjyI",
  authDomain: "kita-app-dd77f.firebaseapp.com",
  projectId: "kita-app-dd77f",
  storageBucket: "kita-app-dd77f.appspot.com",
  messagingSenderId: "744910090089",
  appId: "1:744910090089:web:6da514c49023e3c84917f8",
  measurementId: "G-GT7EJKZ0LV"
};

let Firebase;

if (firebase.apps.length === 0) {
  Firebase = firebase.initializeApp(firebaseConfig);
}

export default Firebase;

