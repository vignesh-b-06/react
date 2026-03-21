import React, { useState } from "react";

function ControlledInputs() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" /><br />
      <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" /><br />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
    </div>
  );
}

export default ControlledInputs ;