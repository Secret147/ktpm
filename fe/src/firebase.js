// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: 'AIzaSyAgoA9Oer_eIPH02VFsA_dnUZeu9BXqGfA',
    authDomain: 'jwt-f9e95.firebaseapp.com',
    projectId: 'jwt-f9e95',
    storageBucket: 'jwt-f9e95.appspot.com',
    messagingSenderId: '597919359954',
    appId: '1:597919359954:web:9d6a36a799b8ed238ade0b',
    measurementId: 'G-JCY10E5V4P',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const storage = getStorage(app);
