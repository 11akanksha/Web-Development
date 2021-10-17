import React, { useState } from "react";

function App() {
  setInterval(updateTime, 1000);
  function getTime() {
    return new Date().toLocaleTimeString();
  }

  let time = getTime();
  const [currTime, setTime] = useState(time);

  function updateTime() {
    setTime(getTime());
  }

  return (
    <div className="container">
      <h1>{currTime}</h1>
      <button onClick={updateTime}>Get Time</button>
    </div>
  );
}

export default App;
