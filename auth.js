import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyAT5I0VzwSkrc57qhuCj39uDiRucomKGnc',
  authDomain: 'nextube-dee20.firebaseapp.com',
  projectId: 'nextube-dee20',
  storageBucket: 'nextube-dee20.appspot.com',
  messagingSenderId: '429043475878',
  appId: '1:429043475878:web:76493698da11f1e42bdb67',
  measurementId: 'G-J02MY9Y865',
};

const auth = getAuth();
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
