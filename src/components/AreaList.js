import React from "react";
import Area from "./Area";

function AreaList({areas}){

    console.log(areas)
    return (
        <div>
            <ul>
            {areas.map((area) => (
                <Area key={area.id} area={area}/>
            ))} 
            </ul>
        </div>
    );

}

export default AreaList;