import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyCK5KEawUWeluYT_DFPPLkpNRG5c_tYE2Q",
    authDomain: "my-water-map.firebaseapp.com",
    projectId: "my-water-map",
    storageBucket: "my-water-map.appspot.com",
    messagingSenderId: "951346967033",
    appId: "1:951346967033:web:46a80999c179b438918d28",
    measurementId: "G-DLL4D8TP3W"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore()
const auth = firebaseApp.auth()
const storage = firebaseApp.storage()
const provider = new firebase.app.GoogleAuthProvider()

export {db , auth, storage, provider}