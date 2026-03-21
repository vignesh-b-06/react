import React, { useState, useEffect } from "react";

function FetchUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(setUsers);
  }, []);

  return (
    <div>
      {users.map(u => <p key={u.id}>{u.name}</p>)}
    </div>
  );
}

export default FetchUsers;