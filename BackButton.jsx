import React from "react";
import { useNavigate } from "react-router-dom";

function UserDetail() {
  const navigate = useNavigate();

  return (
    <div>
      <button onClick={() => navigate("/users")}>
        Back to Users
      </button>
    </div>
  );
}

export default UserDetail;