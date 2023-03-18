import React, { useState } from "react";

function NewArea({onAddArea}){

    const [areaData, setAreaData] = useState({
        area_name: ""
    })

    function handleSubmit(e){
        e.preventDefaul();

        fetch(`http://localhost:9292/areas`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(areaData)
        })
        .then((resp) => resp.json())
        .then((newArea) => onAddArea(newArea))

    }

    function handleChange(e){
        setAreaData({
            ...areaData,
            [e.target.name]: e.target.value
        })
    }
    return (
        <form onSubmit={handleSubmit}>
            <input
            type="text"
            name="area_name"
            placeholder="Enter Position Name.."
            value={areaData.area_name}
            onChange={handleChange}
            />
            <button type="Submit">Add Position</button>
       </form>
    );
}

export default NewArea;