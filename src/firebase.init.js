import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAuc7V3LlFXwSgN_cOrY6QTPCODjSnOJaY",
    authDomain: "syntiqhub.firebaseapp.com",
    projectId: "syntiqhub",
    storageBucket: "syntiqhub.appspot.com",
    messagingSenderId: "173653086250",
    appId: "1:173653086250:web:06ccb206007fea5959b353"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;