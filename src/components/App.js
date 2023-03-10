import React, { useEffect, useState } from 'react'
import Header from './Header';
import PositionList from './PositionList';
import Search from './Search';



function App() {

  const [positions, setPositions] = useState([])

  useEffect(() =>{
    fetch("http://localhost:3000/positions")
    .then((resp) => resp.json())
    .then(positions => setPositions(positions))
  
  },[])

  return (
    <main>
      <Header/>
      <Search/>
      <PositionList positions={positions}/>

    </main>
  );
}

export default App;
