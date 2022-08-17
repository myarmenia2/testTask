import {initializeApp} from "firebase/app";
import {firebaseKey} from "../constants/firebaseKeys";
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut} from "firebase/auth";

interface FirebaseConfig {
    apiKey: string,
    authDomain: string,
    projectId: string,
    storageBucket: string,
    messagingSenderId: string,
    appId: string
}

const firebaseConfig: FirebaseConfig = {
    apiKey: firebaseKey.API_KEY,
    authDomain: firebaseKey.AUTH_DOMAIN,
    projectId: firebaseKey.PROJECT_ID,
    storageBucket: firebaseKey.STORAGE_BUCKET,
    messagingSenderId: firebaseKey.MESSAGING_SENDER_ID,
    appId: firebaseKey.API_KEY
};

initializeApp(firebaseConfig)
 const auth = getAuth();


export const firebaseAuth = (email: string, password: string,) => signInWithEmailAndPassword(auth, email, password);
export const firebaseCreateUser = (email: string, password: string) => createUserWithEmailAndPassword(auth, email, password);
export const firebaseSignOut = () => signOut(auth);
