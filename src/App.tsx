import React from "react";

import "./scss/app.scss";
import { Header, Slider } from "./components";
import { Home } from "./pages";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Home />
    </div>
  );
}

export default App;
