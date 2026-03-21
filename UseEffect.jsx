import React, { useState, useEffect } from "react";

function App() {
  const [text, setText] = useState("");

  useEffect(() => {
    console.log("Changed:", text);
  }, [text]);

  return <input onChange={(e) => setText(e.target.value)} />;
}

export default App;