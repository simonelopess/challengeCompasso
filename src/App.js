import React from "react";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes/routes";
import Navbar from "./components/Navbar/index";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes />
      </BrowserRouter>
    </>
  );
}

export default App;
