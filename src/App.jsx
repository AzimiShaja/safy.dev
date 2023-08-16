import React from "react";
import {Routes , Route } from "react-router-dom";
import IndexPage from "./IndexPage";
import LoginPage from "./pages/LoginPage";
import Register from "./pages/Register";
import './index.css'

function App() {
  return (
    <Routes>
      <Route>
        <Route index element={<IndexPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<Register/>} />
      </Route>
    </Routes>
  )
}

export default App;
