import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GetVehicle from "./Home/GetVehicle";
import NavBar from "./Home/NavBar";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<h1>Home Page</h1>} />
        <Route path="/vehicles" element={<GetVehicle />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

reportWebVitals();
