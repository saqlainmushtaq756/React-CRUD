import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Components/Pages/Home";
import Edit from "./Components/Students/Edit";
import View from "./Components/Students/View";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" Component={Home} />
          <Route exact path="/Edit/:id" Component={Edit} />
          <Route exact path="/View/:id" Component={View} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
