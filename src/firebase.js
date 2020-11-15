// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from 'firebase'


const firebaseConfig = {
    apiKey: "AIzaSyDQvfQFo-u_XuDV8h3Apah-k6VNolFtWxY",
    authDomain: "tiktok-clone-33a1a.firebaseapp.com",
    databaseURL: "https://tiktok-clone-33a1a.firebaseio.com",
    projectId: "tiktok-clone-33a1a",
    storageBucket: "tiktok-clone-33a1a.appspot.com",
    messagingSenderId: "439145133325",
    appId: "1:439145133325:web:1051cba74916175b96ac44",
    measurementId: "G-QPZEC6QFJE"
  };

  const firebaseApp = 
  firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  export default db;