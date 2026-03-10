import { useState } from "react";

function App() {

  const products = ["Laptop", "Phone", "Keyboard"];
  const [search, setSearch] = useState("");

  const filtered = products.filter(product =>
    product.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>

      <input
        type="text"
        placeholder="Search product"
        onChange={(e) => setSearch(e.target.value)}
      />

      {filtered.map((item, index) => (
        <p key={index}>{item}</p>
      ))}

    </div>
  );
}

export default App;