import React, {useState} from "react";

function UpdatePosition({id, positionName, salary}){

    const [positionData, setPositionData] = useState({
        id: id,
        position_name: positionName,
        salary: salary
    })


    function handleFormSubmit(){
        
    }

    function handleChange(e){
        setPositionData({
            ...positionData,
            [e.target.name]: e.target.value
        })
    }
    return (
        <form onSubmit={handleFormSubmit}>
           <input
            type="text"
            name="position_name"
            value={positionData.position_name}
            onChange={handleChange}
            />
            <input
            type="integer"
            name="salary"
            value={positionData.salary}
            onChange={handleChange}
            />
            <input type="submit" value="Save" />
        </form>
    )
}

export default UpdatePosition;