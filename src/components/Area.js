import React from "react";
import { NavLink} from "react-router-dom";


function Area({area, onSetCurrentArea, onSetPositions}){

    
    const {area_name} = area;
    const linkStyles ={
        color: "white",
    }
    
    function handleClick(){
            onSetCurrentArea(area)
            onSetPositions(area.positions);  
    }
    
    return(  
        <nav>
            <NavLink
            exact to={`/${area_name}/positions`} 
            style={linkStyles}
            onClick={handleClick}
            >{area_name}</NavLink>
        </nav>       
    )
    
}

export default Area;