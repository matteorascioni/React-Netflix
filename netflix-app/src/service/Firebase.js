import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCEf1Od_4NffOum0MQ3LEWa7Y0fsJ4M8D0",
    authDomain: "netflix-app-2a4f2.firebaseapp.com",
    projectId: "netflix-app-2a4f2",
    storageBucket: "netflix-app-2a4f2.appspot.com",
    messagingSenderId: "524273127121",
    appId: "1:524273127121:web:b6ab1360bed500417a3ff0",
    measurementId: "G-7W41K37YZC"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;