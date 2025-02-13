import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App"; 
import "./index.css"; 

const root = ReactDOM.createRoot(document.getElementById("root")); // Create root container
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
