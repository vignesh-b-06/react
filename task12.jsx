import { useState } from "react";

function ToDo() {
  const [task, setTask] = useState("");
  const [list, setList] = useState([]);

  function Add() {
    if (task !== "") {
      setList([...list, task]); 
      setTask(""); 
    }
  }

  function Delete(i) {
    setList(list.filter((_, index) => index !== i));
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Enter Task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={Add}>Add Task</button>

      {list.map((t, i) => (
        <p key={i}>
          {t}
          <button onClick={() => Delete(i)}>X</button>
        </p>
      ))}
    </div>
  );
}

export default ToDo;