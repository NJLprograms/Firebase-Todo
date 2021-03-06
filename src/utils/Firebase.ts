import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCPv-xvXuUTIKMdCJUmI7hxMfmDOPTD8ks',
  authDomain: 'fir-todo-c63e6.firebaseapp.com',
  databaseURL: 'https://fir-todo-c63e6.firebaseio.com',
  projectId: 'fir-todo-c63e6',
  storageBucket: 'fir-todo-c63e6.appspot.com',
  messagingSenderId: '526597718221',
  appId: '1:526597718221:web:ce37071178c49cf4eba984',
  measurementId: 'G-5CZ9EWTX9H',
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth;
export const firestore = firebase.firestore;

export default firebase;
