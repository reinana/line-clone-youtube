import firebase from "firebase/compat/app";
import "firebase/compat/auth"
import "firebase/compat/firestore"

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyC7GlZdurgzPVpQOFP2fDXX3ybhv82aD6A",
    authDomain: "line-clone-355ea.firebaseapp.com",
    projectId: "line-clone-355ea",
    storageBucket: "line-clone-355ea.appspot.com",
    messagingSenderId: "833951975007",
    appId: "1:833951975007:web:44519e5495e18359c9bdea"
})

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth }