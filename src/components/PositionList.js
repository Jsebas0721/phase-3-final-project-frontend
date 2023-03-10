import React from "react";

function PositionList({positions}){

    
    return (
        <div>
        {positions.map((pos)=>{
            <Position/>
        })}
        </div>
    )
}

export default PositionList;