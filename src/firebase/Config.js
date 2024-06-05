import firebase from "firebase/compat/app";
import 'firebase/auth'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyCd1UXZPUAez53UvsVlcLpW1z4WSk28rO8",
  authDomain: "olx-clone-eb3ae.firebaseapp.com",
  projectId: "olx-clone-eb3ae",
  storageBucket: "olx-clone-eb3ae.appspot.com",
  messagingSenderId: "1015655354516",
  appId: "1:1015655354516:web:6c88f5009a13acf95be481",
  measurementId: "G-0JG9747YR5"
};

export default firebase.initializeApp(firebaseConfig)