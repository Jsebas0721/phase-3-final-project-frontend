import React from "react";
import Area from "./Area";


function AreaList({areas,  onSetCurrentArea, onSetPositions}){

           
    return (
        <div className="area-container">
            <ul>
            {areas.map((area) => (
                <span key={area.id} className="area-element">
                <Area area={area}  onSetCurrentArea={onSetCurrentArea} onSetPositions={onSetPositions}/>
                <p> Open Jobs: {area.positions ? area.positions.length : "0"}</p>
                <hr/>
                </span>
            ))} 
            </ul>   
        </div>
    );

}

export default AreaList;