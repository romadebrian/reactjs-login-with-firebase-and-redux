import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { Provider } from "react-redux";
import { storeRedux } from "./redux/redux";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./config/firebase";

onAuthStateChanged(auth, (currentUser) => {
  storeRedux.dispatch({ type: "SET_USER", userData: currentUser });
  ReactDOM.render(
    <React.StrictMode>
      <Provider store={storeRedux}>
        <App />
      </Provider>
    </React.StrictMode>,
    document.getElementById("root")
  );
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
