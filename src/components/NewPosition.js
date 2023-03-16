import React from "react";

function NewPosition(){

    return (
       <form>
            <input
            type="text"
            name="position-name"
            placeholder="Enter Position Name.."
            />
            <input
            type="integer"
            name="salary"
            placeholder="Enter Estimated Salary.."
            />
            <button type="Submit">Add Position</button>
       </form>
    )

}

export default NewPosition;