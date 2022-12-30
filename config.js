import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCLv8-RdN_gNm9CKFprsUrQ9fBzykn5naQ",
  authDomain: "attendance-app-d2f73.firebaseapp.com",
  databaseURL: "https://attendance-app-d2f73-default-rtdb.firebaseio.com",
  projectId: "attendance-app-d2f73",
  storageBucket: "attendance-app-d2f73.appspot.com",
  messagingSenderId: "1048704392893",
  appId: "1:1048704392893:web:98fec0107d1cf193bce1d4",
  measurementId: "G-FTWYDX7BS0"
};


if(!firebase.apps.length)
{
  firebase.initializeApp(firebaseConfig);
  }

  export default firebase.database()
 