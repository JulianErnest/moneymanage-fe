import { Routes, Route, Router, BrowserRouter } from "react-router-dom";

import HomeLayout from "../components/HomeLayout";
import ProtectedLayout from "../components/ProtectedLayout";

import Home from "./Home";
import Login from "./Login";
import Dashboard from "./Dashboard";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<HomeLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Route>

        <Route element={<ProtectedLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
