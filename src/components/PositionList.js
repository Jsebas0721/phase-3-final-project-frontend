import React from "react";
import Position from "./Position";
import { useHistory } from "react-router-dom";


function PositionList({positions, onUpdatePosition, onDeletePosition,onAddPosition}){

    console.log(positions)
    
    
    const history = useHistory();
   
    function handleClick(){
        history.push("/");
    }
  
    return (
        <div className="position-container">
            {/* <h2>{currentArea.area_name} Open Positions:</h2>
            <NewPosition currentArea={currentArea} onAddPosition={onAddPosition}/>  
            <hr/>  */}
            <ul>
            {positions.length !== 0 ? positions.map((position) => (
                <Position key={position.id} position={position} onUpdatePosition={onUpdatePosition} onDeletePosition={onDeletePosition}/>
            )) :
            <p>Currently, There are not Open Positions within this Area.</p>}
            </ul>
            <button onClick={handleClick}>Back to Areas</button>
        </div>
    );
}

export default PositionList;