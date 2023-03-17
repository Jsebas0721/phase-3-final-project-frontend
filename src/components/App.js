import React, { useEffect, useState } from 'react'
import Header from './Header';
import AreaList from './AreaList';
import Search from './Search';
import { Route, Switch } from 'react-router-dom';
import PositionList from './PositionList';
import NewPosition from './NewPosition';



function App() {

  const [areas, setAreas] = useState([])
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
  }

  function handleDeletePosition(positionId){
    const updatedPositions = positions.filter((pos)=> pos.id !== positionId)
    setPositions(updatedPositions)
  }

  return (
    <main>
      <Header/>
      <Switch>
        <Route path="/positions">
          <Search/>
          <NewPosition/>
          <PositionList positions={positions} onUpdatePosition={handleUpdatePosition} onDeletePosition={handleDeletePosition}/>
        </Route>
        <Route exact path="/">
          <AreaList areas={areas} setPositions={setPositions}/>
        </Route>
      </Switch>
    </main>
  );
}

export default App;
