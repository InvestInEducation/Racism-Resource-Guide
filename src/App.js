import React from 'react';
import Timeline from "./components/Timeline"
import Citation from "./components/Citation"
function App() {
  return (
    <div className="App">
      <center>
        <h1 style={{color:"white"}}>A timeline of black history</h1>
      </center>
      <Timeline />
      <Citation/>
    </div>
  );
}

export default App;
