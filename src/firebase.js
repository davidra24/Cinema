import firebase from 'firebase';
const firebaseConfig = {
  apiKey: 'AIzaSyDlEAL7uK6KKtVs1s26m4kUyOAwH0-bWIM',
  authDomain: 'cine-7e1d8.firebaseapp.com',
  databaseURL: 'https://cine-7e1d8.firebaseio.com',
  projectId: 'cine-7e1d8',
  storageBucket: 'cine-7e1d8.appspot.com',
  messagingSenderId: '508952987792',
  appId: '1:508952987792:web:093e05f2f222c242',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default {
  database: firebase.firestore(),
  authentication: firebase.auth(),
};
