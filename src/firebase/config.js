import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBFHOTdIM36-hjCElIBZcymlITRVwtDwrk",
  authDomain: "land-project-57455.firebaseapp.com",
  projectId: "land-project-57455",
  storageBucket: "land-project-57455.appspot.com",
  messagingSenderId: "458972518166",
  appId: "1:458972518166:web:49ebcec9120bafab7d6237"
};

  initializeApp(firebaseConfig)

  const db = getFirestore()
  export {db}