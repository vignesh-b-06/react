import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: { main: "#1976d2" }
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <h2>My App</h2>
    </ThemeProvider>
  );
}

export default App;