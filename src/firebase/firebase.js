import firebase from 'firebase/app';
import 'firebase/storage'
import 'firebase/analytics'
import { auth } from "firebase";
//require('dotenv').config({path:'./'})

const firebaseConfig = {
    apiKey: "AIzaSyBWXFGj6AHAMGo_sO1cTy_E1oknPL7vKRY",
	authDomain: "quiztantra.firebaseapp.com",
	projectId: "quiztantra",
	storageBucket: "quiztantra.appspot.com",
	messagingSenderId: "153376884651",
	appId: "1:153376884651:web:a087f3949faa28906934ee"

};
  


firebase.initializeApp(firebaseConfig);
//firebase.analytics();
//firebase.auth();

export default firebase;