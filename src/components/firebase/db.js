// hello
import firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA6lV7YOjgy3u_EdFaPPZp2lqeFFYDB-oo",
  authDomain: "healthcalculators-45fea.firebaseapp.com",
  databaseURL: "https://healthcalculators-45fea-default-rtdb.firebaseio.com",
  projectId: "healthcalculators-45fea",
  storageBucket: "healthcalculators-45fea.appspot.com",
  messagingSenderId: "165126525528",
  appId: "1:165126525528:web:1a27a69e6ffd33f0caf02d",
  measurementId: "G-7M6J6VVN1F",
};

export const db = initializeApp(firebaseConfig).firestore();
