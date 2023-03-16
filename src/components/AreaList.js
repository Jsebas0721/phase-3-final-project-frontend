import React from "react";
import Area from "./Area";

function AreaList({areas, setPositions}){

    
    return (
        <div>
            <h1>Areas</h1>
            <ul>
            {areas.map((area) => (
                <Area key={area.id} area={area} setPositions={setPositions}/>
            ))} 
            </ul>
        </div>
    );

}

export default AreaList;