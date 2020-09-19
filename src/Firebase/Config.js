import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyCtWm4AVQ53WrFNUU8PFsFNCNfxFEYD7_A",
    authDomain: "userapp-c0d70.firebaseapp.com",
    databaseURL: "https://userapp-c0d70.firebaseio.com",
    projectId: "userapp-c0d70",
    storageBucket: "userapp-c0d70.appspot.com",
    messagingSenderId: "609097002326",
    appId: "1:609097002326:web:96d67fe9b5f56cc1e6baf7"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase