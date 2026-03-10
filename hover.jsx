import { useState } from "react";

function App() {

  const items = ["Laptop", "Phone", "Keyboard"];
  const [hovered, setHovered] = useState(null);

  return (
    <div>

      {items.map((item, index) => (
        <p
          key={index}
          onMouseEnter={() => setHovered(index)}
          onMouseLeave={() => setHovered(null)}
          style={{
            backgroundColor: hovered === index ? "lightblue" : "white",
            padding: "10px"
          }}
        >
          {item}
        </p>
      ))}

    </div>
  );
}

export default App;