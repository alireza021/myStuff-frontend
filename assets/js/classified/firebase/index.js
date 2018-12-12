import firebase from 'firebase/app';
import 'firebase/storage';
var config = {
   apiKey: "AIzaSyDKSpvazJheL1E1sACneja6RItnoZH-N0k",
   authDomain: "mystuff-309c8.firebaseapp.com",
   databaseURL: "https://mystuff-309c8.firebaseio.com",
   projectId: "mystuff-309c8",
   storageBucket: "mystuff-309c8.appspot.com",
   messagingSenderId: "1000986675085"
 };
  firebase.initializeApp(config);

  const storage = firebase.storage();

  export {
      storage, firebase as default
  }
