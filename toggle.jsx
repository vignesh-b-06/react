import React, { useState } from "react";

function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  const style = {
    backgroundColor: darkMode ? "black" : "white",
    color: darkMode ? "white" : "black",
    height: "100vh",
    padding: "20px"
  };

  return (
    <div style={style}>
      <h2>Theme Toggle</h2>

      <button onClick={() => setDarkMode(!darkMode)}>
        Toggle Mode
      </button>
    </div>
  );
}

export default ThemeToggle;