import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


var config = {
      apiKey: "AIzaSyDPufj_V7o0yLBE0YRI7WstKinox_6OMCo",
      authDomain: "crwn-db-c0291.firebaseapp.com",
      databaseURL: "https://crwn-db-c0291.firebaseio.com",
      projectId: "crwn-db-c0291",
      storageBucket: "crwn-db-c0291.appspot.com",
      messagingSenderId: "15766802406",
      appId: "1:15766802406:web:104c009cb4486e93d4d027",
      measurementId: "G-K2Q1Q04K7B"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promp: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;