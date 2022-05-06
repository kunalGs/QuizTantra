import firebase from 'firebase/app';
import 'firebase/storage'
import 'firebase/analytics'
import { auth } from "firebase";
//require("dotenv").config()

const firebaseConfig = {
	apiKey: "AIzaSyCh91XEuhA85JvIsA3bneSOgaFyLUbrApQ",
	authDomain: "quiztantra-c3444.firebaseapp.com",
	projectId: "quiztantra-c3444",
	storageBucket: "quiztantra-c3444.appspot.com",
	messagingSenderId: "993760891537",
	appId: "1:993760891537:web:62f91dc81d89f750432530"
};
  

//apiKey: "AIzaSyCh91XEuhA85JvIsA3bneSOgaFyLUbrApQ",
//authDomain: "quiztantra-c3444.firebaseapp.com",
//projectId: "quiztantra-c3444",
//storageBucket: "quiztantra-c3444.appspot.com",
//messagingSenderId: "993760891537",
//appId: "1:993760891537:web:62f91dc81d89f750432530",
//measurementId: "G-LSDL8XJYFT"

firebase.initializeApp(firebaseConfig);
//firebase.analytics();
//firebase.auth();

export default firebase;