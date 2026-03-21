import React, { useState } from "react";

function App() {
  const [email, setEmail] = useState("");

  const isValid = email.includes("@");

  return (
    <div>
      <input onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
      {!isValid && <p>Invalid Email</p>}
      <button disabled={!isValid}>Submit</button>
    </div>
  );
}

export default App;