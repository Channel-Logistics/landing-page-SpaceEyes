import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import HeroSection from './components/pages/hero';
import Firewatch from "./components/pages/Firewatch";
import SeaWatch from "./components/pages/Seawatch";

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-app-background text-app-text">
      <Header />
      <main className="flex-grow pt-24">
      <HeroSection />
      <Firewatch/>
      <SeaWatch/>
      
      </main>

      <Footer />
    </div>
  );
}

export default App;