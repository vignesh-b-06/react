import React from "react";

import Welcome from "./Welcome";
import Login from "./Login";

function MainPage({ isLoggedIn }) {
  return (
    <div>
      {isLoggedIn ? <Welcome /> : <Login />}
    </div>
  );
}

export default MainPage;