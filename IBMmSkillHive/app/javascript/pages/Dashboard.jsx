import React from "react";
import { Link } from "react-router-dom";
import TableauDashboard from "../components/TableauDashboard";
import Sidebar from "../components/Sidebar";
export default () => (

    <div className="Glass">
      <div className="Welcome">Dashboard</div>
      <Sidebar/>
      <div className="tableau-container"> <TableauDashboard/></div>
    
      </div>
);