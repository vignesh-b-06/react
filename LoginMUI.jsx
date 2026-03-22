import React from "react";
import { TextField, Button } from "@mui/material";

function Login() {
  return (
    <div>
      <TextField label="Email" /><br /><br />
      <TextField label="Password" type="password" /><br /><br />
      <Button variant="contained">Login</Button>
    </div>
  );
}

export default Login;