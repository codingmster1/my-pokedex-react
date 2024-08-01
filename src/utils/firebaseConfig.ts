import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore, collection } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyDCq1xnWv7CrPgAKSjzaOeuj2_o5AKcPuk",
    authDomain: "pokedex-react-e932b.firebaseapp.com",
    projectId: "pokedex-react-e932b",
    storageBucket: "pokedex-react-e932b.appspot.com",
    messagingSenderId: "856358800980",
    appId: "1:856358800980:web:e38d8f34089ea52e6667c1",
    measurementId: "G-3EX53QMXQR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
export const firebaseDB = getFirestore(app);

export const usersRef = collection(firebaseDB, "users");
export const pokemonListRef = collection(firebaseDB, "pokemonList");
const analytics = getAnalytics(app);