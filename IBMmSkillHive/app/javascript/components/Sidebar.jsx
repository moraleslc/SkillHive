import React, { useState } from 'react';
import {UilSignOutAlt} from '@iconscout/react-unicons'
import {SidebarData} from "../Data/Data"
import { Link } from 'react-router-dom';

//"menuItem active" key={index} style={{ color: "white" }}>
const Sidebar = () => {

    const [selected, setSelected] = useState(null)

    return(
        <div className="Sidebar">
            <div className= "menu">
               {SidebarData.map((item, index)=>{
                return(
                    <Link to={item.path} style={{ color: 'black', textDecoration: 'none'}}>
                    <div 
                        className={selected === index ? 'menuItem active' : 'menuItem'} 
                        onMouseEnter={() => setSelected(index)} 
                        onMouseLeave={() => setSelected(null)}
                    >
                        <item.icon/>
                        <span>{item.heading}</span>
                    </div>
                    </Link>
                )
               })}
               
                <span></span>
               <Link to = "/"
                className = "menuItem"
                style={{ color: 'black', textDecoration: 'none'}}>
                   
                    <UilSignOutAlt></UilSignOutAlt>
                    <span>
                        Sign Out
                    </span>
                </Link>
            </div>
            
        </div>
    )
}

export default Sidebar;