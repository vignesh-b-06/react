import React, { useState, useMemo } from "react";

function App() {
  const [n, setN] = useState(0);

  const result = useMemo(() => n * 2, [n]);

  return (
    <div>
      <input onChange={(e) => setN(e.target.value)} />
      <p>{result}</p>
    </div>
  );
}

export default App;