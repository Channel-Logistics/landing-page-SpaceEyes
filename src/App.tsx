// src/App.tsx
import { Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />

      <main className="flex-grow pt-24">
        <Routes>
          <Route path="*" element={<h1 className="text-center mt-20 text-lg">404 - Page Not Found</h1>} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
