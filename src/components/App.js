import React, { useEffect, useState } from 'react'
import Header from './Header';
import AreaList from './AreaList';
import Search from './Search';
import { Route, Switch } from 'react-router-dom';
import PositionList from './PositionList';



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

  
  return (
    <main>
      <Header/>
      <Switch>
        <Route path="/positions">
          <Search/>
          <PositionList positions={positions}/>
        </Route>
        <Route exact path="/">
          <AreaList areas={areas} setPositions={setPositions}/>
        </Route>
      </Switch>
    </main>
  );
}

export default App;
