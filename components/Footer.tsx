import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-dian-dark py-8 text-center text-blue-200 text-sm">
      <div className="max-w-7xl mx-auto px-4">
        <p className="font-semibold text-white mb-2">DIAN - Dirección de Impuestos y Aduanas Nacionales</p>
        <p>© 2025 Feria Nacional De Servicios. Todos los derechos reservados.</p>
        <p className="mt-4 text-xs text-blue-400">Este sitio es de carácter informativo para el evento designado.</p>
      </div>
    </footer>
  );
};