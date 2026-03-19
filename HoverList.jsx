import React, { useState } from "react";


function HoverList() {
  const [hovered, setHovered] = useState(null);

  const products = ["Laptop", "Phone", "Tablet"];

  return (
    <ul>
      {products.map((item, index) => (
        <li
          key={index}
          onMouseEnter={() => setHovered(index)}
          onMouseLeave={() => setHovered(null)}
          className={hovered === index ? "highlight" : ""}
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

export default HoverList;
