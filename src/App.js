import React, { useEffect, useState } from "react";
import io from "socket.io-client";

const socket = io.connect("http://localhost:3000");

function App() {
  const [timestamp, setTimestamp] = useState(null);
  const [value, setValue] = useState(null);

  useEffect(() => {
    socket.on("data", (data) => {
      setTimestamp(data.timestamp);
      setValue(data.value);
    });
  }, []);

  return (
    <div>
      <h1>Real-Time Data</h1>
      <p>timestamp: {timestamp}</p>
      <p>value: {value}</p>
    </div>
  );
}

export default App;
