import SeaWatch from "@/components/pages/defenses/Seawatch";
import Morpheus from "@/components/pages/defenses/Morpheus";
import FireWatch from "@/components/pages/climates/Firewatch";
import Layout from "@/components/layout/Layout";
import { Routes, Route } from "react-router-dom";

export default function RoutesProduct() {
    <Routes>
        <Route element={<Layout />}>
            <Route path="/seawatch" element={<SeaWatch />} />
            <Route path="/morpheus" element={<Morpheus />} />
            <Route path="/firewatch" element={<FireWatch />} />
        </Route>
    </Routes>
}