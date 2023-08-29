// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAT5I0VzwSkrc57qhuCj39uDiRucomKGnc',
  authDomain: 'nextube-dee20.firebaseapp.com',
  projectId: 'nextube-dee20',
  storageBucket: 'nextube-dee20.appspot.com',
  messagingSenderId: '429043475878',
  appId: '1:429043475878:web:76493698da11f1e42bdb67',
  measurementId: 'G-J02MY9Y865',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
