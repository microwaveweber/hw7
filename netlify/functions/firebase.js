const firebase = require("firebase/app")
require("firebase/firestore")

const firebaseConfig = {apiKey: "AIzaSyDlCJb8qnG4gxdOxeMU41gDSALc-ddU77c",
authDomain: "kiei451-7bbc3.firebaseapp.com",
projectId: "kiei451-7bbc3",
storageBucket: "kiei451-7bbc3.appspot.com",
messagingSenderId: "693267555758",
appId: "1:693267555758:web:98b845ecfe3fc13717943f"} // replace

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

module.exports = firebase