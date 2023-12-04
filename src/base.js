import { initializeApp } from 'firebase/app'
import { getDatabase } from 'firebase/database'

const firebaseApp = initializeApp({
    apiKey: "AIzaSyAOyMdYj1Q2d13jIWlsXbqQo7BfKrX2nEw",
    authDomain: "demo2023-a2568.firebaseapp.com",
    databaseURL: "https://demo2023-a2568-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "demo2023-a2568",
    storageBucket: "demo2023-a2568.appspot.com",
    messagingSenderId: "219764219328",
    appId: "1:219764219328:web:e8ec561e075fd848effc25"
})

const database = getDatabase(firebaseApp)

export default database