import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import HeroSection from './components/pages/hero';
import Firewatch from "./components/pages/Firewatch";
import SeaWatch from "./components/pages/Seawatch";
import Morpheus from "./components/pages/Morpheus";

function App() {
  return (
    <div className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth">
      <Header />
      <HeroSection />
      <Firewatch />
      <SeaWatch />
      <Morpheus />
      <Footer />
    </div>
  );
}

export default App;