/** @format */

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyD6G1QiKetZQefGmMdTrQW4MY_istkMikM',
  authDomain: 'info-5139-group-5.firebaseapp.com',
  projectId: 'info-5139-group-5',
  storageBucket: 'info-5139-group-5.appspot.com',
  messagingSenderId: '621294944814',
  appId: '1:621294944814:web:a27e1ab7314aad9ad515bf',
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const app2 = app;
export const auth = getAuth(app);
