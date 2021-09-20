import firebase from 'firebase/app'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBRe29Om7DdbKCjDLw_DMRxOXIQmR2iMM4",
    authDomain: "mn-traveller.firebaseapp.com",
    projectId: "mn-traveller",
    storageBucket: "mn-traveller.appspot.com",
    messagingSenderId: "1055698075322",
    appId: "1:1055698075322:web:f7e0e69aa70fb69ea34c83"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const firebaseAuth = firebaseApp.auth()

  export {
      firebaseApp, firebaseAuth
  }