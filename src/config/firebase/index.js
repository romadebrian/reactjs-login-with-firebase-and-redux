import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC9l1t-l55GCkR71kt_xhB-Npa5E6sOIUs",
  authDomain: "testfirebase-5d3b6.firebaseapp.com",
  databaseURL: "https://testfirebase-5d3b6.firebaseio.com",
  projectId: "testfirebase-5d3b6",
  storageBucket: "testfirebase-5d3b6.appspot.com",
  messagingSenderId: "799266533322",
  appId: "1:799266533322:web:e6f1c2292b346cc098e933",
  measurementId: "G-H9NLL1YNME",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

// export default app;
