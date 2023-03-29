import React, { useState } from "react";

function NewPosition({currentArea, onAddPosition}){

   
    
    const [positionData, setPositionData] = useState({
        position_name: "",
        salary: "",
    });


    function handleSubmit(e) {
      e.preventDefault();
      
      if(positionData.position_name && positionData.salary){
        fetch("http://localhost:9292/positions", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...positionData,
            area_id: currentArea.id
          }),
        })
        .then((resp) => resp.json())
        .then((newPosition) => {
            onAddPosition(newPosition)
            setPositionData({
              position_name: "",
              salary: ""
            })
        });
      }else{
        alert("Please Enter Position name and Salary.")
      }
    }

    function handleChange(e){
      setPositionData({
          ...positionData,
          [e.target.name]: e.target.value
      });
    }

    return (
      <div className="new-position-form">
        <form onSubmit={handleSubmit}>
            <span>Add New Position: </span>
            <input
            type="text"
            name="position_name"
            placeholder="Enter Position Name.."
            value={positionData.position_name}
            onChange={handleChange}
            />
            <input
            type="number"
            name="salary"
            placeholder="Enter Estimated Salary.."
            value={positionData.salary}
            onChange={handleChange}
            />
            <button type="Submit">Add Position</button>
        </form>
       </div>
    )

}

export default NewPosition;