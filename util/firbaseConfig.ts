import { initializeApp, getApps, getApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyAjv8KwYEynGhOmhkwEvxa1v7L8vJFJumQ",
  authDomain: "pulsefeed-5a81d.firebaseapp.com",
  projectId: "pulsefeed-5a81d",
  storageBucket: "pulsefeed-5a81d.appspot.com",
  messagingSenderId: "56150486435",
  appId: "1:56150486435:web:856c5dde30c64311a43e16",
  measurementId: "G-KY7T8BK6KL"
};

// Initialize Firebase app if it has not been initialized already
const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);

export default app;
