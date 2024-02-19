import firebase from 'firebase';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyANOd-jQ0P9bc9QO70YAqpsmu4IPagRfTA",
    authDomain: "disney-clone-5e66c.firebaseapp.com",
    projectId: "disney-clone-5e66c",
    storageBucket: "disney-clone-5e66c.appspot.com",
    messagingSenderId: "560059904467",
    appId: "1:560059904467:web:7c1ab44c68025831da7f26",
    measurementId: "G-6H9DHX2VTP"
};

const app = initializeApp(firebaseConfig);
const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;



