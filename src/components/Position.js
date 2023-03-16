import React, { useState} from "react";
import UpdatePosition from "./UpdatePosition";

function Position({position}){

    const [isUpdating, setIsUpdating] = useState(false);
    const {id, position_name, salary} = position;
    console.log(isUpdating)
    console.log(position)
    return(
        <div className="display-positions">
             {isUpdating ? (
                <UpdatePosition
                id={id}
                positionName={position_name}
                salary={salary}
                />
             ) : (
                <div>
                    <span>{position_name}</span>
                    <span> Salary: {parseFloat(salary).toFixed(3)}/year </span>
                </div>
             )}
             <button onClick={() => setIsUpdating((isUpdating) => !isUpdating)}>Update</button>
             <button>Delete</button>
             <hr/>
        </div>
    )
}

export default Position;