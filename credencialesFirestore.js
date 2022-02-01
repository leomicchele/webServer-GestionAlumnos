// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";
const { initializeApp } = require('firebase/app');
const { getFirestore } = require('firebase/firestore');
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.API_KEY || 'AIzaSyBQeFxcYyDTF2BWVR6196pZT8Wv0PGHvFY', 
  authDomain: process.env.AUTH_DOMAIN || 'gestion-de-alumnos-7493d.firebaseapp.com', 
  projectId: process.env.PROJECT_ID || 'gestion-de-alumnos-7493d', 
  storageBucket: process.env.STORAGE_BUCKET || 'gestion-de-alumnos-7493d.appspot.com', 
  messagingSenderId: process.env.MESSAGING_SENDER_ID || '958251740971', 
  appId: process.env.APP_ID || '1:958251740971:web:cc1c1d56458d4d63bc5f6e' 
};


// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
const db = getFirestore(appFirebase)

module.exports = appFirebase;
module.exports = { db }; 
// export default appFirebase
// export { db }