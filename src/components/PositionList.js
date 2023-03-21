import React from "react";
import Position from "./Position";
import NewPosition from './NewPosition';
import { useHistory } from "react-router-dom";

function PositionList({positions, currentArea, onUpdatePosition, onDeletePosition,onAddPosition}){

    const history = useHistory();

    function handleClick(){
        history.push("/");
    }
  
    return (
        <div className="position-container">
            <h2>Open Positions:</h2>
            <NewPosition currentArea={currentArea} onAddPosition={onAddPosition}/>  
            <hr/> 
            <ul>
            {positions.map((position) => (
                <Position key={position.id} position={position} onUpdatePosition={onUpdatePosition} onDeletePosition={onDeletePosition}/>
            ))}
            </ul>
            <button onClick={handleClick}>Back to Areas</button>
        </div>
    );
}

export default PositionList;