import React, { useState } from 'react';
import {UilSignOutAlt} from '@iconscout/react-unicons'
import {SidebarData} from "../Data/Data"
//"menuItem active" key={index} style={{ color: "white" }}>
const Sidebar = () => {

    const [selected, setSelected] = useState(0)
    return(
        <div className="Sidebar">
            <div className= "menu">
               {SidebarData.map((item, index)=>{
                return(
                    <div className= {selected === index?'menuItem active': 'menuItem'}
                    key= {index}
                    onClick= {()=>setSelected(index) }>
                    
                        <item.icon/>
                        <span >
                            {item.heading}
                        </span>
                        </div>
                )
               })}

                <span></span>
               <div className = "menuItem">
                    <UilSignOutAlt></UilSignOutAlt>
                    <span>
                        Sign Out
                    </span>
                </div>
            </div>
            
        </div>
    )
}

export default Sidebar;