import React, { useEffect } from "react";
import { NavLink} from "react-router-dom";


function Area({area, setPositions, setCurrentArea}){

    const { id, area_name} = area;
    
    const linkStyles ={
        color: "white",
    }
    
    function handleClick(){
        
        
        fetch(`http://localhost:9292/areas/${id}`)
        .then((resp) => resp.json())
        .then((area) => {
            setCurrentArea(area)
            setPositions(area.positions);
        })
    }
    
    return(  
        <nav>
            <NavLink 
            exact to={`/${area_name}/positions`} 
            style={linkStyles}
            onClick={handleClick}>{area_name}</NavLink>
        </nav>       
    )
    
}

export default Area;