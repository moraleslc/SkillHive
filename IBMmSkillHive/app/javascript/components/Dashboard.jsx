import React from "react";
import { Link } from "react-router-dom";
import Navbar from './NavBar';
import TableauDashboard from "./TableauDashboard";

export default () => (
    <div style = {{
      backgroundColor:"#E5E0DF",
      width: "100vw",
      height: "100vh",
    }}>
      
    <div className="Menu">

        <Navbar></Navbar> 
    </div>
    
    <div className="tableau-container"> <TableauDashboard/></div>
  </div>
);