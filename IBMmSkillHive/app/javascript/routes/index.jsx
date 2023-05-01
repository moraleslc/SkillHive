import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import Overview from "../pages/Overview";
export default (
  <Router>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path = "/dashboard" element={<Dashboard />}/>
      <Route path= "/overview/index" element={<Overview/>}/>
    </Routes>
  </Router>
);