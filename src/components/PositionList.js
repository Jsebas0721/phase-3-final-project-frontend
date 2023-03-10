import React from "react";
import Position from "./Position";

function PositionList({positions}){

    console.log(positions)
    return (
        <div>
            <ul>
                {positions.map((position) => {
                <Position position={position}/>
                })}
            </ul>
        </div>
    );
}

export default PositionList;