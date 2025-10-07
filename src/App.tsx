// src/App.tsx
import { Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import HeroSection from './components/pages/hero';

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-app-background text-app-text">
      <Header />
      <main className="flex-grow pt-24">
      <HeroSection />
      
      </main>

      <Footer />
    </div>
  );
}

export default App;