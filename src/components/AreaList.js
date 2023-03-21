import React, {useState} from "react";
import Area from "./Area";
import NewArea from "./NewArea";

function AreaList({areas, setPositions, setCurrentArea, onAddArea}){

        
    return (
        <div className="area-container">
            <div className="area-header">
                <h1>Areas</h1>
                <NewArea onAddArea={onAddArea}/>
            </div>
            <hr/>
            <ul>
            {areas.map((area) => (
                <span key={area.id} className="area-element">
                <Area area={area} setPositions={setPositions} setCurrentArea={setCurrentArea}/>
                <p> Open Jobs: {area.positions ? area.positions.length : null}</p>
                <hr/>
                </span>
            ))} 
            </ul>
            
        </div>
    );

}

export default AreaList;