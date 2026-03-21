import React, { useState } from "react";

function    ClearButton() {
  const [name, setName] = useState("");

  return (
    <div>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={() => setName("")}>Clear</button>
    </div>
  );
}

export default ClearButton;