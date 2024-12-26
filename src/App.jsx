import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Component/Home";

import './App.css'
import Login from "./Component/Login";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}> 
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
