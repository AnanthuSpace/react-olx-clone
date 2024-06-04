import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { FirebaseContext } from "./Store/FirebaseContext.jsx";
import firebase from "./firebase/Config.js";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <FirebaseContext.Provider value={{ firebase }}>
      <App />
    </FirebaseContext.Provider>
  </React.StrictMode>
);
