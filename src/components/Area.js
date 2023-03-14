import React from "react";

function Area({area}){

    const { id, area_name} = area;

    
    console.log(area_name)
    return(
        <li>
            <h3>{area_name}</h3>
        </li>
    )
}

export default Area;