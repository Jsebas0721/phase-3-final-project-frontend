import React from "react";

function Position({position}){

    const { id, position_name, salary, area} = position;

    console.log(position)
    return(
        <li>
            <p>{position_name}</p> <span>{salary}</span>
        </li>
    )
}

export default Position;