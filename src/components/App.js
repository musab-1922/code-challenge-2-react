import React, { useState, useEffect } from "react";
import BotsPage from "./BotsPage";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/http://localhost:3000/bots")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className="App">
      <BotsPage data={data} />
    </div>
  );
}

export default App;
