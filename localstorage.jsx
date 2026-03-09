import React, { useState, useEffect } from "react";

function CounterStorage() {

  const [count, setCount] = useState(() => {
    const saved = localStorage.getItem("count");
    return saved ? parseInt(saved) : 0;
  });

  useEffect(() => {
    localStorage.setItem("count", count);
  }, [count]);

  return (
    <div>
      <h2>Counter: {count}</h2>

      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

export default CounterStorage;