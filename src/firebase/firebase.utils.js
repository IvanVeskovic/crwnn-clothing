import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDzsXhhZ2zTmekzbP8hf-MS7nE-AHMV3KA",
    authDomain: "crwn-db-adc63.firebaseapp.com",
    projectId: "crwn-db-adc63",
    storageBucket: "crwn-db-adc63.appspot.com",
    messagingSenderId: "912793555456",
    appId: "1:912793555456:web:0be774ced098d6df7dfee5",
    measurementId: "G-07C8MQNV4B"
  };


firebase.initializeApp(config);


export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;