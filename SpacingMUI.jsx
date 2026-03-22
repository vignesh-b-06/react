import React from "react";
import { TextField, Button, Box } from "@mui/material";

function Spacing() {
  return (
    <Box sx={{ p: 2 }}>
      <TextField label="Name" sx={{ mb: 2 }} /><br />
      <Button variant="contained">Submit</Button>
    </Box>
  );
}

export default Spacing;