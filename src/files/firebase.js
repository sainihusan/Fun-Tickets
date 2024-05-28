
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBPuJ-1qEv82xcM79dCf4lqO5J7dCFqiQE",
    authDomain: "moviebookingproject-78441.firebaseapp.com",
    projectId: "moviebookingproject-78441",
    storageBucket: "moviebookingproject-78441.appspot.com",
    messagingSenderId: "711925103734",
    appId: "1:711925103734:web:7867a7ad39e7ce7fe4f357",
    measurementId: "G-MZMRE67NVV"
};

const fire = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const firestore = firebase.firestore();

export { auth, firestore };
export default fire;