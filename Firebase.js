
import {initializeApp} from "firebase/app";
import { getAuth, initializeAuth } from "firebase/auth";
import { getReactNativePersistence } from 'firebase/auth/react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { 
  getDoc, 
  getFirestore, 
  onSnapshot, 
  setDoc, 
  collection, 
  doc, 
  addDoc,
  query, 
  getDocs,
  docSnapshot,
  serverTimestamp 
} from "firebase/firestore";



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB37l_x4Xs9GfFepv8h3DQvgmVvh63NGjM",
  authDomain: "campuscorner-4bbc7.firebaseapp.com",
  projectId: "campuscorner-4bbc7",
  storageBucket: "campuscorner-4bbc7.appspot.com",
  messagingSenderId: "835221127818",
  appId: "1:835221127818:web:3ee7b46e203b834678a373"
};



app = initializeApp(firebaseConfig);

const auth = getAuth();
const firestore = getFirestore();

const data = doc(firestore, "waitTime/NQEinapxrMRAp7EI48Je")

export { auth, firestore, data }

/*
const data = collection(firestore, "waitTime")

async function addNewDoc() {
  const newDoc = await addDoc(data, {
    hours: 1,
    minutes: 15
  });
}

addNewDoc()

~

const data = doc(firestore, "waitTime/NQEinapxrMRAp7EI48Je")

function writeData() {

  const docData = {
    hours: 1,
    minutes: 3,

  };
  setDoc(data, docData)
}

writeData();

~

const data = doc(firestore, "waitTime/NQEinapxrMRAp7EI48Je")

async function ReadDocument() {

const mySnapshot = await getDoc(data)
  
  if (mySnapshot.exists) {
    const docData = mySnapshot.data()
    console.log(`${JSON.stringify(docData)}`)
    
  }
}


ReadDocument()

~

function listenToDocument() {

onSnapshot(data, (docSnapshot) => {
  if (docSnapshot.exists()) {
    const docData = docSnapshot.data();
    console.log(docData)
  }
 });
}


listenToDocument()

~

//there is a query function didnt write all of it
function queryForDocuments() {
const timeQuery = query(
  collection(firestore, 'waitTime')
)

}
queryForDocuments()


//working code

import {initializeApp} from "firebase/app";
import { getAuth } from "firebase/auth";
import { 
  getDoc, 
  getFirestore, 
  onSnapshot, 
  setDoc, 
  collection, 
  doc, 
  addDoc  
} from "firebase/firestore";



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB37l_x4Xs9GfFepv8h3DQvgmVvh63NGjM",
  authDomain: "campuscorner-4bbc7.firebaseapp.com",
  projectId: "campuscorner-4bbc7",
  storageBucket: "campuscorner-4bbc7.appspot.com",
  messagingSenderId: "835221127818",
  appId: "1:835221127818:web:3ee7b46e203b834678a373"
};

// Initialize Firebase

app = initializeApp(firebaseConfig);

const auth = getAuth();
const firestore = getFirestore();

const data = doc(firestore, "waitTime/NQEinapxrMRAp7EI48Je")

export { auth, firestore, data }
*/