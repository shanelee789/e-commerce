import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAfAEN24JTrHFUGtCWtHjkrIPXOKWsBgQQ",
    authDomain: "react-e-commerce-4c202.firebaseapp.com",
    databaseURL: "https://react-e-commerce-4c202.firebaseio.com",
    projectId: "react-e-commerce-4c202",
    storageBucket: "react-e-commerce-4c202.appspot.com",
    messagingSenderId: "22630803844",
    appId: "1:22630803844:web:b835abb04f30dd477c55d1",
    measurementId: "G-5M6W9DE21R"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;