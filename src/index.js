import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import Teacher from "./routes/teacher";
import School from "./routes/school";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/teacher_portal" element={<Teacher />} />
        <Route path="/school_portal" element={<School />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  rootElement
);
