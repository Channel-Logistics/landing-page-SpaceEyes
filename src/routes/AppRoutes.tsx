import { Routes, Route } from "react-router-dom";
import Layout from "@/components/layout/Layout";

import Home from "@/components/pages/sections/Home";
import Investors from "@/components/pages/sections/Investor";
import SeaWatch from "@/components/pages/defenses/Seawatch";
import Morpheus from "@/components/pages/defenses/Morpheus";
import FireWatch from "@/components/pages/climates/Firewatch";

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/investors" element={<Investors />} />
        <Route path="/defense/sea-watch" element={<SeaWatch />} />
        <Route path="/defense/morpheus" element={<Morpheus />} />
        <Route path="/climate/fire-watch" element={<FireWatch />} />
      </Route>
    </Routes>
  );
}
