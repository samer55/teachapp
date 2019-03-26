// import and configure firebase
import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBKw5vwd12QRPqAoZ4gXLcPLhV9I1c3HmM",
    authDomain: "tuto-7416f.firebaseapp.com",
    databaseURL: "https://tuto-7416f.firebaseio.com",
    projectId: "tuto-7416f",
    storageBucket: "tuto-7416f.appspot.com",
    messagingSenderId: "177922242113"
}
export const firebaseApp = firebase.initializeApp(firebaseConfig)
