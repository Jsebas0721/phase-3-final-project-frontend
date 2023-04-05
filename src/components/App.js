import React, { useEffect, useState } from 'react'
import Header from './Header';
import AreaList from './AreaList';
import Search from './Search';
import NewPosition from './NewPosition';
import { Route, Switch } from 'react-router-dom';
import PositionList from './PositionList';
import NewArea from './NewArea';




function App() {

  const [areas, setAreas] = useState([])
  const [currentArea, setCurrentArea] = useState({})
  const [positions, setPositions] = useState([])
  const [search, setSearch] = useState("")
  
  
  
  useEffect(() => {

    document.title = "Amazon Jobs";

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
    const updatedAreas = areas.map((area) => {
      if(area.id === updatedPos.area_id){
        return {...area, positions: updatedPositions};
      }else{
        return area;
      }
    })
    setAreas(updatedAreas)
    console.log(areas)
    console.log("Position Updated: ", updatedPos)
  }
  
  
  function handleDeletePosition(deletedPosition){
    const updatedPositions = positions.filter((pos)=> pos.id !== deletedPosition.id)
    setPositions(updatedPositions)
    const updatedAreas = areas.map((area) => {
      if(area.id === deletedPosition.area_id){
        return {...area, positions: updatedPositions};
      }else{
        return area;
      }
    })
    setAreas(updatedAreas)
    
  }
  function handleAddPosition(newPosition){
    
    setPositions([...positions, newPosition])
    const updatedAreas = areas.map((area) => {
      if(area.id === newPosition.area_id){
        console.log(area.positions)
        return {...area, positions:  [...area.positions, newPosition]}
      }else{
        return area;
      }
    })
    setAreas(updatedAreas)
    
    
    console.log("Position Created: ", newPosition)
    
  }
  
  function handleAddArea(newArea){
    setAreas([...areas, newArea])
    console.log("Area Created: ", newArea)
  }


  
   const  displayPositions = positions.filter((position) => position.position_name.toLowerCase().includes(search.toLowerCase()))
  
 
 
  
  return (
    <main>
      <Header/>
      <hr/>
      <Switch>
        <Route exact path={`/${currentArea.area_name}/positions`}>
          <h2>{currentArea.area_name} Open Positions:</h2>
          <NewPosition currentArea={currentArea} onAddPosition={handleAddPosition}/>  
          <hr/> 
          <Search search={search} onSetSearch={setSearch}/>
          <PositionList 
          positions={displayPositions}
           onUpdatePosition={handleUpdatePosition} 
           onDeletePosition={handleDeletePosition} 
          />
        </Route>
        <Route exact path="/">
          <div className="area-header">
              <h1>Areas</h1>
              <NewArea onAddArea={handleAddArea}/>
          </div>
          <AreaList areas={areas}  onSetCurrentArea={setCurrentArea} onSetPositions={setPositions} onAddArea={handleAddArea}/>
        </Route>
      </Switch>
    </main>
  );
}

export default App;
