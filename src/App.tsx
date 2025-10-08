import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import HeroSection from './components/pages/hero';
import Firewatch from "./components/pages/Firewatch";
import SeaWatch from "./components/pages/Seawatch";

import ContentRenderer from "./components/pages/ContentRenderer";

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-app-background text-app-text">
      <Header />
      <main className="flex-grow pt-24">
        <Routes>
          <Route path="*" element={<h1 className="text-center mt-20 text-lg">404 - Page Not Found</h1>} />
          <Route path="/contact-us" element={<ContentRenderer />} />
          
        </Routes>
      <HeroSection />
      <Firewatch/>
      <SeaWatch/>
      
      </main>

      <Footer />
    </div>
  );
}

export default App;