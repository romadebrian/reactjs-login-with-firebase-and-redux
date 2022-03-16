import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { createStore } from "redux";
import { Provider } from "react-redux";

const globalState = {
  user: "",
};

//Reducer
const rootReducer = (state = globalState, action) => {
  // console.log("aksi", action);

  if (action.type === "SET_USER") {
    return {
      ...state,
      user: action.userEmail,
    };
  }

  return state;
};

//Store
const storeRedux = createStore(rootReducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={storeRedux}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
