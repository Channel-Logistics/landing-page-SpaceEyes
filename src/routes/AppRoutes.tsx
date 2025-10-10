import { Routes, Route } from "react-router-dom";
import Layout from "@/components/layout/Layout";

import Home from "@/components/pages/sections/Home";
import Investors from "@/components/pages/sections/Investor";
import SeaWatch from "@/components/pages/defenses/Seawatch";
import Morpheus from "@/components/pages/defenses/Morpheus";
import FireWatch from "@/components/pages/climates/Firewatch";
import ContactUs from "@/components/pages/usefulLinks/ContactUs";
import Company from "@/components/pages/sections/Company";

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/investors" element={<Investors />} />
        <Route path="/defense/seawatch" element={<SeaWatch />} />
        <Route path="/defense/morpheus" element={<Morpheus />} />
        <Route path="/climate/firewatch" element={<FireWatch />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/company" element={<Company />} />
      </Route>
    </Routes>
  );
}
