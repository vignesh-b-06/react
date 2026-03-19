import React, { useState } from "react";

function FilterList() {
  const [search, setSearch] = useState("");

  const products = ["Laptop", "Phone", "Tablet"];

  const filtered = products.filter((item) =>
    item.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search product"
        onChange={(e) => setSearch(e.target.value)}
      />

      <ul>
        {filtered.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default FilterList;