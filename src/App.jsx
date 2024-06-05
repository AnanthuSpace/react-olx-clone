import { useEffect, useContext } from "react";

import Signup from "./Components/Singup";
import Login from "./Components/Login ";
import Home from "./Pages/Home";
import Create from "./Components/Create";
import View from "./Components/View";
import Post from "./Store/viewContext";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { userContext } from "./Store/userContext";
import { FirebaseContext } from "./Store/FirebaseContext";
import { getAuth } from "firebase/auth";

import "./App.css";

function App() {
  const { setUser } = useContext(userContext);
  const { firebase } = useContext(FirebaseContext);

  useEffect(() => {
    const authentication = getAuth(firebase);
    authentication.onAuthStateChanged((user) => setUser(user));
  }, []);

  return (
    <>
      <Post>
        <Router>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/signup" element={<Signup />} />
            <Route exact path="/create" element={<Create />} />
            <Route exact path="/view-post" element={<View />} />
          </Routes>
        </Router>
      </Post>
    </>
  );
}

export default App;
