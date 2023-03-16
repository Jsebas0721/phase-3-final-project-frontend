import React, { useState } from "react";
import { NavLink} from "react-router-dom";


function Area({area, setPositions}){

    
   
    const { id, area_name} = area;

    function handleClick(){
        fetch(`http://localhost:9292/areas/${id}`)
        .then((resp) => resp.json())
        .then((area) => {
            
            setPositions(area.positions)
            console.log(area.positions)
        })
    }
   
    
    return(  
        <nav>
            <NavLink exact to="/positions" onClick={handleClick}>{area_name}</NavLink>
            <hr/>
        </nav>       
    )
    
}

export default Area;