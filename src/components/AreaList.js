import React, {useState} from "react";
import Area from "./Area";
import NewArea from "./NewArea";

function AreaList({areas, setPositions, setCurrentArea, onAddArea}){

    
    return (
        <div>
            <h1>Areas</h1>
            <NewArea onAddArea={onAddArea}/>
            <ul>
            {areas.map((area) => (
                <span key={area.id}>
                <Area area={area} setPositions={setPositions} setCurrentArea={setCurrentArea}/>
                <p> Open Jobs: {area.positions.length}</p>
                <hr/>
                </span>
            ))} 
            </ul>
            
        </div>
    );

}

export default AreaList;