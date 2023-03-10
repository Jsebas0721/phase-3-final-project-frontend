import React from "react";

function Position({position}){

    const { id, positionName, salary, area} = position;

    console.log(position)
    return(
        <li>
            <h3>{positionName}</h3>
            <p>{salary}</p>
            <p>{area}</p>
        </li>
    )
}

export default Position;