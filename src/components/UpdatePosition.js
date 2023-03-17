import React, {useState} from "react";

function UpdatePosition({id, positionName, salary, onUpdatePosition}){

    const [positionData, setPositionData] = useState({
        id: id,
        position_name: positionName,
        salary: salary
    });


    function handleFormSubmit(e){
        e.preventDefault();
        
        fetch(`http://localhost:9292/positions/${id}`,{
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(positionData),
        })
        .then((resp) => resp.json())
        .then((updatedPos) => onUpdatePosition(updatedPos))
    }

    function handleChange(e){
        setPositionData({
            ...positionData,
            [e.target.name]: e.target.value
        });
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
            type="number"
            name="salary"
            value={positionData.salary}
            onChange={handleChange}
            />
            <input type="submit" value="Save" />
        </form>
    )
}

export default UpdatePosition;