import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyCZYyFKZMlPvjxRcaQVgBISneV7AY_sPDM",
    authDomain: "advisely-umo.firebaseapp.com",
    databaseURL: "https://advisely-umo.firebaseio.com",
    projectId: "advisely-umo",
    storageBucket: "advisely-umo.appspot.com",
    messagingSenderId: "119380292503",
    appId: "1:119380292503:web:7b7f35ac8869e462"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase