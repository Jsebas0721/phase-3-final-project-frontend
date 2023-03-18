import React, { useEffect, useState } from 'react'
import Header from './Header';
import AreaList from './AreaList';
import Search from './Search';
import { Route, Switch } from 'react-router-dom';
import PositionList from './PositionList';




function App() {

  const [areas, setAreas] = useState([])
  const [currentArea, setCurrentArea] = useState({})
  const [positions, setPositions] = useState([])

  
  useEffect(() =>{
    fetch("http://localhost:9292/areas")
    .then((resp) => resp.json())
    .then(areas => {
      setAreas(areas)
    })
  
  },[])

  function handleUpdatePosition(updatedPos){
    const updatedPositions = positions.map((pos) => {
      if(pos.id === updatedPos.id){
        return updatedPos;
      }else{
        return pos;
      }
    });
    setPositions(updatedPositions);
    console.log("Position Updated: ", updatedPos)
  }

  function handleDeletePosition(positionId){
    const updatedPositions = positions.filter((pos)=> pos.id !== positionId)
    setPositions(updatedPositions)
    
  }
  function handleAddPosition(newPosition){
    setPositions([...positions,newPosition])
    console.log("Position Created: ", newPosition)
  }

  function handleAddArea(newArea){
    setAreas([...areas, newArea])
    console.log("Area Created: ", newArea)
  }
  
  
  return (
    <main>
      <Header/>
      <Switch>
        <Route exact path={`/${currentArea.area_name}/positions`}>
          <Search/>
          <PositionList 
           positions={positions}
           currentArea={currentArea}
           onUpdatePosition={handleUpdatePosition} 
           onDeletePosition={handleDeletePosition} 
           onAddPosition={handleAddPosition}/>
        </Route>
        <Route exact path="/">
          <AreaList areas={areas} setPositions={setPositions} setCurrentArea={setCurrentArea} onAddArea={handleAddArea}/>
        </Route>
      </Switch>
    </main>
  );
}

export default App;
