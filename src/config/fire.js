import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyApIM8g31qa_ljDau8BfLxfcYOYmx-LpFU",
    authDomain: "myapp-4612c.firebaseapp.com",
    databaseURL: "https://myapp-4612c.firebaseio.com",
    projectId: "myapp-4612c",
    storageBucket: "myapp-4612c.appspot.com",
    messagingSenderId: "456795364746",
    appId: "1:456795364746:web:199f452872429039e37c73",
    measurementId: "G-M5P34R76HQ"
  };
  // Initialize Firebase
  const fire = firebase.initializeApp(firebaseConfig);

  export default fire;
