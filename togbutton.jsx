import { useState } from "react";

function App() {

  const [layout, setLayout] = useState("grid");

  return (
    <div>

      <button onClick={() => setLayout(layout === "grid" ? "list" : "grid")}>
        Toggle Layout
      </button>

      <div style={{
        display: layout === "grid" ? "grid" : "block",
        gridTemplateColumns: "repeat(3,1fr)",
        gap: "10px",
        marginTop: "20px"
      }}>

        <div style={{border:"1px solid black"}}>Item 1</div>
        <div style={{border:"1px solid black"}}>Item 2</div>
        <div style={{border:"1px solid black"}}>Item 3</div>

      </div>

    </div>
  );
}

export default App;