import React, { useEffect, useState } from 'react'
import Header from './Header';
import AreaList from './AreaList';
import Search from './Search';



function App() {

  const [areas, setAreas] = useState([])

  useEffect(() =>{
    fetch("http://localhost:9292/areas")
    .then((resp) => resp.json())
    .then(areas => setAreas(areas))
  
  },[])

  return (
    <main>
      <Header/>
      <Search/>
      <AreaList areas={areas}/>
    </main>
  );
}

export default App;
