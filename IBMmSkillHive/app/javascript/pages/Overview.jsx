import React from "react";
import { Link } from "react-router-dom";
import Sidebar from '../components/Sidebar';
import TableauDashboard from "../components/TableauDashboard";
import MainDash from "../components/MainDash" 

export default () => (
   <div className="background-s">
        <div className="Glass">
            <div className="Welcome">Welcome, Ms. Guadalupe</div>
            <Sidebar/>
            <MainDash></MainDash>
    

        </div>
   </div>
);