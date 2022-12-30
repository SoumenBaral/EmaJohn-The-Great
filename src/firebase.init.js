// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from 'firebase/auth'
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyATF99hLIjzlYQ8NypSLBECbJxxEBlfTXk",
    authDomain: "ema-john-the-great.firebaseapp.com",
    projectId: "ema-john-the-great",
    storageBucket: "ema-john-the-great.appspot.com",
    messagingSenderId: "1070907609304",
    appId: "1:1070907609304:web:c10e4bedf2772b90d3c7ad"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;