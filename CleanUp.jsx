import React, { useEffect } from "react";

function App() {
  useEffect(() => {
    const id = setInterval(() => console.log("Running"), 1000);

    return () => clearInterval(id);
  }, []);

  return <p>Check console</p>;
}

export default App;