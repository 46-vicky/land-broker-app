import { initializeApp } from 'firebase/app'
import {
    getFirestore
} from 'firebase/firestore'
const firebaseConfig = {
    apiKey: "AIzaSyCGED3m9uxniSr2wtivNSNH4nF79OiXhLc",
    authDomain: "land-masters.firebaseapp.com",
    projectId: "land-masters",
    storageBucket: "land-masters.appspot.com",
    messagingSenderId: "724675451669",
    appId: "1:724675451669:web:ffaf26a9dc76277db8271c"
  };

  initializeApp(firebaseConfig)

  const db = getFirestore()
  export {db}