import React from "react";
import { Route, Routes } from "react-router-dom";
import Employee from "../views/Employee.jsx";

export default function Root() {
  return (
    <Routes>
      <Route path="/" element={<Employee />} />
    </Routes>
  );
}
