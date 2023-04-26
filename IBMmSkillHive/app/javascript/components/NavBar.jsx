import React from "react";

function NavBar(){ 
    return (
        <ul>
            <div className = "SelectionBox"><a href = "#">Overview</a></div>
            <div className="UnSelectionBox"><a href = "#">All teams</a></div>
            <div className="UnSelectionBox"><a href = "#">Goals</a></div>
        </ul>

    );
}

export default NavBar;