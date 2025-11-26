import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ModuleCobranzas } from './components/ModuleCobranzas';
import { ModuleDevoluciones } from './components/ModuleDevoluciones';
import { ModuleInconsistencias } from './components/ModuleInconsistencias';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900 selection:bg-blue-200 selection:text-dian-dark">
      <Navbar />
      <main>
        <Hero />
        <ModuleCobranzas />
        <ModuleInconsistencias />
        <ModuleDevoluciones />
      </main>
      <Footer />
    </div>
  );
}
import { Analytics } from "@vercel/analytics/next"
export default App;
