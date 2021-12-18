import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";
// import "firebase/firebase-functions"; // we have to make firestore rules and some functions

const firebaseConfig = {
    apiKey: "AIzaSyA6lV7YOjgy3u_EdFaPPZp2lqeFFYDB-oo",
    authDomain: "healthcalculators-45fea.firebaseapp.com",
    databaseURL: "https://healthcalculators-45fea-default-rtdb.firebaseio.com",
    projectId: "healthcalculators-45fea",
    storageBucket: "healthcalculators-45fea.appspot.com",
    messagingSenderId: "165126525528",
    appId: "1:165126525528:web:1a27a69e6ffd33f0caf02d",
    measurementId: "G-7M6J6VVN1F"
};

// firebase.initializeApp(firebaseConfig);
export const app = firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();
export const auth = firebase.auth();
export const storage = firebase.storage();
