import React from "react";
import { Link } from "react-router-dom";
import Navbar from '../components/NavBar';
import TableauDashboard from "../components/TableauDashboard";

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