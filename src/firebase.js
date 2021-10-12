import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyC_5uKDZnFcNdly3cvw1_ISEvexZwxNgKQ",
    authDomain: "todo-app-cp-8f21c.firebaseapp.com",
    projectId: "todo-app-cp-8f21c",
    storageBucket: "todo-app-cp-8f21c.appspot.com",
    messagingSenderId: "83542193456",
    appId: "1:83542193456:web:785cf30cdd4b6dab28c4f5",
    measurementId: "G-EFNZ24V2C9"
});

const db = firebaseApp.firestore();

export default db;