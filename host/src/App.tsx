import React from "react";
import ReactDOM from "react-dom";
import Card from 'remote/Card';

import "./index.css";

const App = () => (
  <div>
    <h1>HOST</h1>
    <Card></Card>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
