import React, { useState, useEffect } from "react";
import BotsPage from "./BotsPage";

function App() {
  const [bots, setBots] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/bots")
      .then((response) => response.json())
      .then((data) => setBots(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="App">
      <BotsPage bots={bots} />
    </div>
  );
}

export default App;
