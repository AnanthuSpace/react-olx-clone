import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Signup from './Components/Singup';
import Login from './Components/Login '
import './App.css';

import Home from './Pages/Home';

function App() {
  return (
    <>
      {/* <ViewContextProvider> */}
        <Router>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/signup" element={<Signup />} />
            {/* <Route exact path="/create" element={<Create />} /> */}
            {/* <Route exact path="/view-post" element={<ViewPost />} /> */}
          </Routes>
        </Router>
      {/* </ViewContextProvider> */}
    </>
  );
}

export default App;