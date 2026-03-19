import React, { useState } from "react";

function ToggleButton() {
  const [isGrid, setIsGrid] = useState(false);

  const products = ["Laptop", "Phone", "Tablet"];

  return (
    <div>
      <button onClick={() => setIsGrid(!isGrid)}>
        Toggle Layout
      </button>

      <div style={{ display: isGrid ? "grid" : "block", gridTemplateColumns: "repeat(3, 1fr)", gap: "10px" }}>
        {products.map((item, index) => (
          <div key={index} style={{ border: "1px solid black", padding: "10px" }}>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ToggleButton;