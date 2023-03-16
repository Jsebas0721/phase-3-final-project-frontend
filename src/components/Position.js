import React from "react";

function Position({position}){

    const {position_name, salary} = position;

    console.log(position)
    return(
        <div className="display-positions">
             <span>{position_name}</span>
             <span> Salary: {parseFloat(salary).toFixed(3)}/year </span>
             <button>Update</button>
             <button>Delete</button>
             <hr/>
        </div>
    )
}

export default Position;