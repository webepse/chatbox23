import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCLr8moZ9oqOME_yPXRo7KioWdiKtKg318",
    authDomain: "fir-student-15266.firebaseapp.com",
    projectId: "fir-student-15266",
    storageBucket: "fir-student-15266.appspot.com",
    messagingSenderId: "602156417128",
    appId: "1:602156417128:web:eef1bffbe70a61f5267bdd"
}

const app = initializeApp(firebaseConfig)
const firestore = getFirestore(app)

export default firestore