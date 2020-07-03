import React, { useState } from 'react';
import Timeline from "./components/Timeline"
import Citation from "./components/Citation"
import Navbar from './components/Navbar';
import Stats from './components/Stats';

function App() {
  const [currentPage, setPage] = useState(0)
  
  if (currentPage === 0) {
    return (
      <div className="App">
        <Navbar setPage={setPage} page={currentPage} />
        <center>
          <h1 style={{ color: "white" }}>A timeline of black history</h1>
        </center>
        <Timeline />
        <Citation />
      </div>
    )
  }
  
  else if (currentPage === 1) {
    return (
      <div className="App">
        <Navbar setPage={setPage} />
        <center>
          <h1 style={{ color: "white" }}>An overview of statistics</h1>
        </center>
        <Stats />
      </div>
    )
  }
}


export default App;
