import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/database";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC9l1t-l55GCkR71kt_xhB-Npa5E6sOIUs",
  authDomain: "testfirebase-5d3b6.firebaseapp.com",
  databaseURL: "https://testfirebase-5d3b6.firebaseio.com",
  projectId: "testfirebase-5d3b6",
  storageBucket: "testfirebase-5d3b6.appspot.com",
  messagingSenderId: "799266533322",
  appId: "1:799266533322:web:fe7715e1f2d7261e98e933",
  measurementId: "G-J5MMLZR6TN",
};

firebase.initializeApp(firebaseConfig);

// export const getAuth = firebase.auth();
// export const database = firebase.database();
// export const storage = firebase.storage();

export default firebase;
