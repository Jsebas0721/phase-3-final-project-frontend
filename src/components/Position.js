import React, { useState} from "react";
import UpdatePosition from "./UpdatePosition";

function Position({position, onUpdatePosition, onDeletePosition}){

    const [isUpdating, setIsUpdating] = useState(false);
    const {id, position_name, salary} = position;
    

    function handleIsUpdating(updatedPos){
        setIsUpdating(false)
        onUpdatePosition(updatedPos)
    }
    function handleDeletePosition(){
        fetch(`http://localhost:9292/positions/${id}`,{
            method: "DELETE",
        });

        onDeletePosition(id)
    }
    return(
        <div className="display-positions">
             {isUpdating ? (
                <UpdatePosition
                id={id}
                positionName={position_name}
                salary={salary}
                onUpdatePosition={handleIsUpdating}
                />
             ) : (
                <div>
                    <span>{position_name}</span>
                    <span> Salary: {parseFloat(salary).toFixed(3)}/year </span>
                </div>
             )}
             <button onClick={() => setIsUpdating((isUpdating) => !isUpdating)}>Update</button>
             <button onClick={handleDeletePosition}>Delete</button>
             <hr/>
        </div>
    )
}

export default Position;