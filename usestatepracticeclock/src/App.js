import React, {useState} from "react";
import './App.css';

function App() {
    setInterval(getTime, 1000)
    const [initialTime, newTime] = useState(new Date().toLocaleTimeString());
    function getTime() {
            newTime(new Date().toLocaleTimeString())
    }
  return (
      <div className="container">
        <h1>{initialTime}</h1>
        <button onClick={getTime}>Get Time</button>
      </div>
  );
}

export default App;



