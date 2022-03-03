import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyC1uD19YZGY9DkmfCcqOP577yrknT8G7fg",
    authDomain: "round-runner-339715.firebaseapp.com",
    projectId: "round-runner-339715",
    storageBucket: "round-runner-339715.appspot.com",
    messagingSenderId: "1065230024021",
    appId: "1:1065230024021:web:1819d7fbca0094917043dc",
    measurementId: "G-LH53NJDW88"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);