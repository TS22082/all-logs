import React, { useState, useEffect } from "react";
import "@fontsource/roboto";
import axios from "axios";
import UserContext from "./Context/UserContext";
import { Typography } from "@material-ui/core";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Typography variant="h1" component="h2">
        Hello
      </Typography>
    </div>
  );
}

export default App;
