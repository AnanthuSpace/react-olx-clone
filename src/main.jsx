import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { FirebaseContext } from "./Store/FirebaseContext.jsx";
import { UserContextProvider } from "./Store/userContext.jsx";
import firebase from "./firebase/Config.js";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <FirebaseContext.Provider value={{ firebase }}>
    <UserContextProvider>
      <App />
    </UserContextProvider>
  </FirebaseContext.Provider>
);
