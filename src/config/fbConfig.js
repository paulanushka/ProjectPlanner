import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyCeu42DrewzkuMyWrNE7yuC7ZVMF-7Bufg",
    authDomain: "project-planner-c10b7.firebaseapp.com",
    databaseURL: "https://project-planner-c10b7.firebaseio.com",
    projectId: "project-planner-c10b7",
    storageBucket: "project-planner-c10b7.appspot.com",
    messagingSenderId: "780394959219",
    appId: "1:780394959219:web:c12ba7e316b68e96c93506",
    measurementId: "G-WL043JCYZP"
  };

firebase.initializeApp(config);

export default firebase;