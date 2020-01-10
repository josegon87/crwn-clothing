import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyBAdfb16sViM8rh7c5wm__RD2OTNEaVSPE",
    authDomain: "crwn-db-4664a.firebaseapp.com",
    databaseURL: "https://crwn-db-4664a.firebaseio.com",
    projectId: "crwn-db-4664a",
    storageBucket: "crwn-db-4664a.appspot.com",
    messagingSenderId: "821226573942",
    appId: "1:821226573942:web:cda320e37d2b492d130f57",
    measurementId: "G-VFK5EEDY5E"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const singInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;