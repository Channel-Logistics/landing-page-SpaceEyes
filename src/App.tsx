import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./components/pages/sections/Home";
import Investor from "./components/pages/sections/Investor";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/investor" element={<Investor />} />
      </Route>
    </Routes>
  );
}
