import React from "react";
import { Card, CardContent } from "@mui/material";
import AddEmp from "./components/AddEmp";
import { Landing } from "./components/Landing";

function App() {
  return (
    <Card>
      <CardContent>
        <h1>CRUD</h1>
        {/* <AddEmp /> */}
        <Landing />
      </CardContent>
    </Card>
  );
}

export default App;
