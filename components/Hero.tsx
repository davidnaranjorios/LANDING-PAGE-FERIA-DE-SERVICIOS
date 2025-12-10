import React from 'react';
import { Calendar, ChevronDown } from 'lucide-react';

export const Hero: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { id: 'cobranzas', label: 'Cobranzas, Facilidades de pago' },
    { id: 'inconsistencias', label: 'Corrección de Inconsistencias' },
    { id: 'devoluciones', label: 'Orientación de devoluciones' },
  ];

  return (
    <div className="relative bg-gradient-to-br from-dian-dark via-blue-900 to-blue-800 pt-32 pb-24 overflow-hidden">
      {/* Abstract Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
           <path d="M0 100 C 20 0 50 0 100 100 Z" fill="white" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex justify-center mb-8">
           {/* Logo - Standalone without containers */}
           <img 
              src="https://appdefeprof56924a79f.blob.core.windows.net/blobappdefeprof56924a79f/wp-content/uploads/2024/12/Logo-DIAN-2024-COLOR-300x260.png" 
              alt="Logo DIAN" 
              className="h-32 object-contain filter drop-shadow-lg"
              onError={(e) => {
                  e.currentTarget.style.display = 'none';
              }}
           />
        </div>
        
        <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-4 drop-shadow-lg">
          Feria Nacional De Servicios
        </h1>
        
        <div className="inline-flex items-center bg-white/10 backdrop-blur-md rounded-full px-6 py-2 mt-4 border border-white/20 mb-6">
          <Calendar className="w-5 h-5 text-blue-300 mr-2" />
          <span className="text-xl md:text-2xl text-blue-100 font-semibold">
            11 de Diciembre 2025
          </span>
        </div>
        
        {/* Navigation Menu in Hero */}
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center flex-wrap max-w-5xl mx-auto">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="group flex items-center bg-white/10 hover:bg-white text-white hover:text-dian-primary border border-white/30 px-6 py-4 rounded-xl backdrop-blur-md transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 w-full md:w-auto text-left md:text-center"
            >
              <span className="font-semibold text-lg">{link.label}</span>
              <ChevronDown className="ml-2 w-5 h-5 opacity-70 group-hover:opacity-100 flex-shrink-0" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
