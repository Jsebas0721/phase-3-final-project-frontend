import React from "react";
import Position from "./Position";

function PositionList({positions}){

    console.log(positions)
    return (
        <div>   
            <h2>Open Positions:</h2>
            <ul>
            {positions.map((position) => (
                <Position key={position.id} position={position}/>
            ))}
            </ul>
        </div>
    );
}

export default PositionList;