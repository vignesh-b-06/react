import React, { useState } from "react";

function Input({ value, onChange }) {
  return <input value={value} onChange={onChange} />;
}

function App() {
  const [text, setText] = useState("");

  return (
    <div>
      <Input value={text} onChange={(e) => setText(e.target.value)} />
    </div>
  );
}

export default App;