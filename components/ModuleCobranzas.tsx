import React from 'react';
import { COBRANZAS_LIST, FACILIDADES_LINKS } from '../constants';
import { Building2, FileText, Download, ExternalLink, ArrowRight } from 'lucide-react';

export const ModuleCobranzas: React.FC = () => {
  return (
    <section id="cobranzas" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-dian-dark sm:text-4xl">Cobranzas y Facilidades de Pago</h2>
          <div className="w-24 h-1 bg-dian-accent mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Column 1: Directory */}
          <div className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-dian-primary">
            <div className="flex items-center mb-6">
              <Building2 className="w-8 h-8 text-dian-primary mr-3" />
              <h3 className="text-2xl font-bold text-gray-900">Directorio Cobranzas</h3>
            </div>
            
            <div className="space-y-4">
              {COBRANZAS_LIST.map((item, index) => (
                <div key={index} className="flex justify-between items-center p-3 hover:bg-blue-50 rounded-lg transition-colors border-b border-gray-100 last:border-0">
                  <span className="text-gray-700 font-medium">{item.title}</span>
                  <span className="text-sm font-bold text-dian-accent bg-blue-100 px-3 py-1 rounded-full whitespace-nowrap">
                    {item.floor}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Column 2: Facilidades */}
          <div className="space-y-8">
            <div className="bg-dian-dark text-white rounded-2xl shadow-lg p-8 relative overflow-hidden">
               <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-blue-500 rounded-full opacity-20 blur-xl"></div>
              
               <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <FileText className="w-8 h-8 text-blue-300 mr-3" />
                  <h3 className="text-2xl font-bold">Facilidades de Pago</h3>
                </div>
                
                <p className="mb-8 text-blue-100">
                  Acceda a la información oficial y descargue los formatos necesarios para solicitar facilidades de pago.
                </p>

                <div className="space-y-4">
                  {FACILIDADES_LINKS.map((link, index) => (
                    <a
                      key={index}
                      href={link.url}
                      download={link.type === 'download'}
                      target={link.type === 'external' ? '_blank' : '_self'}
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between w-full bg-white/10 hover:bg-white/20 border border-white/20 p-4 rounded-xl transition-all duration-300"
                    >
                      <span className="font-semibold text-white group-hover:text-blue-200">{link.title}</span>
                      {link.type === 'download' ? (
                        <Download className="w-5 h-5 text-blue-300" />
                      ) : (
                        <ExternalLink className="w-5 h-5 text-blue-300" />
                      )}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-blue-100 rounded-xl p-6 border border-blue-200">
               <h4 className="font-bold text-dian-dark mb-2 flex items-center">
                 <ArrowRight className="w-4 h-4 mr-2" />
                 Nota Importante
               </h4>
               <p className="text-sm text-gray-700">
                 Para trámites presenciales, diríjase al piso correspondiente indicado en el directorio de cobranzas.
               </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};