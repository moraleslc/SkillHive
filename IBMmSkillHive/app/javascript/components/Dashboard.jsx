import React from "react";
import { Link } from "react-router-dom";
import Navbar from './NavBar';

export default () => (
    <div style = {{
      backgroundColor:"#E5E0DF",
      width: "100vw",
      height: "100vh",
    }}>
    
  <div className="Menu">

      <Navbar></Navbar> 
  </div>
  </div>
);