import React, { useState, useCallback } from "react";

function App() {
  const [count, setCount] = useState(0);

  const add = useCallback(() => setCount(count + 1), [count]);

  return <button onClick={add}>{count}</button>;
}

export default App;