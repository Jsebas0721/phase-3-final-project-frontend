import React, { useState } from "react";

function NewArea({onAddArea}){

    const [areaData, setAreaData] = useState({
        area_name: ""
    })

    function handleSubmit(e){
        e.preventDefault();

        if(areaData.area_name){
            fetch("http://localhost:9292/areas", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(areaData)
            })
            .then((resp) => resp.json())
            .then((newArea) => {
                onAddArea(newArea)
                setAreaData({
                    area_name: ""
                })
            })
        }else{
            alert("Please Enter an Area name.")
        }

    }

    function handleChange(e){
        setAreaData({
            ...areaData,
            [e.target.name]: e.target.value
        })
    }
    return (
        <form className="new-area-form" onSubmit={handleSubmit}>
            <span>Add New Area: </span>
            <input
            type="text"
            name="area_name"
            placeholder="Enter Area Name.."
            value={areaData.area_name}
            onChange={handleChange}
            />
            <button type="Submit">Add Area</button>
       </form>
    );
}

export default NewArea;