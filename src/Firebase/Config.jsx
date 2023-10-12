// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDXXfjOQ_X-SoTKYnBMV6KDwsLd5R6zI_w",
  authDomain: "proyecto-final-react-61b45.firebaseapp.com",
  projectId: "proyecto-final-react-61b45",
  storageBucket: "proyecto-final-react-61b45.appspot.com",
  messagingSenderId: "140777216107",
  appId: "1:140777216107:web:60c3bf3c8f5bc4021ef92e",
  measurementId: "G-ZM5RTTTHK2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const initFirebase = () => app