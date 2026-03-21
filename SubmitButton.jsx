import React, { useState } from "react";

function   SubmitButton () {
  const [name, setName] = useState("");
  const [data, setData] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setData(name);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input onChange={(e) => setName(e.target.value)} placeholder="Name" />
        <button type="submit">Submit</button>
      </form>

      <p>{data}</p>
    </div>
  );
}

export default SubmitButton;