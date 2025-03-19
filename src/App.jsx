import { Typography } from "@mui/material";
import Header from "./components/Header.tsx";

import "./App.css";

function App() {
  return (
    <div className="app">
      <Header />
      <Typography sx={{ padding: "2em" }} color="black" variant="h3">
        Website in progress...
      </Typography>
    </div>
  );
}

export default App;
