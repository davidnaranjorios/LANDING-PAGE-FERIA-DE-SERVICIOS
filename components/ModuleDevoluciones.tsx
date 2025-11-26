import React from 'react';
import { DEVOLUCIONES_STEPS } from '../constants';
import { Mail, CheckCircle, AlertCircle, ArrowUpRight } from 'lucide-react';

export const ModuleDevoluciones: React.FC = () => {
  return (
    <section id="devoluciones" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-dian-dark sm:text-4xl">Orientación de Devoluciones</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Pasos para solicitar la devolución y/o compensación por pagos en exceso o de lo no debido.
          </p>
          <div className="w-24 h-1 bg-dian-accent mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="relative pl-0 md:pl-10">
           {/* Connecting Line (Left Aligned) */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200 hidden md:block"></div>

          <div className="space-y-12">
            {DEVOLUCIONES_STEPS.map((step, index) => (
              <div key={index} className="relative flex flex-col md:flex-row gap-8">
                
                {/* Number Bubble */}
                <div className="hidden md:flex flex-shrink-0 z-10 items-center justify-center w-16 h-16 bg-dian-primary text-white text-xl font-bold rounded-full border-4 border-white shadow-md">
                  {step.number}
                </div>

                {/* Content Side */}
                <div className="flex-1">
                   {/* Mobile Number Bubble */}
                   <div className="md:hidden flex items-center mb-4">
                      <span className="flex items-center justify-center w-12 h-12 bg-dian-primary text-white text-lg font-bold rounded-full mr-3 shadow-md">
                        {step.number}
                      </span>
                      <h3 className="text-xl font-bold text-dian-dark">{step.title}</h3>
                   </div>

                  <div className="bg-gray-50 p-6 md:p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow text-left">
                    <h3 className="hidden md:block text-2xl font-bold text-dian-dark mb-4">{step.title}</h3>
                    <p className="text-gray-700 mb-6 text-lg">{step.description}</p>
                    
                    {step.links && (
                      <div className="flex flex-wrap gap-4 mb-6">
                        {step.links.map((link, idx) => (
                          <a 
                            key={idx}
                            href={link.url}
                            download={link.type === 'download'}
                            target={link.type === 'external' ? '_blank' : '_self'}
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-4 py-2 rounded-lg bg-white border border-gray-200 text-dian-accent font-medium hover:bg-blue-50 hover:border-blue-200 transition-colors"
                          >
                            {link.title}
                            <ArrowUpRight className="ml-2 w-4 h-4" />
                          </a>
                        ))}
                      </div>
                    )}

                    {step.email && (
                      <div className="flex items-center p-4 bg-blue-100/50 rounded-lg mb-6 text-dian-dark font-medium break-all border border-blue-100">
                        <Mail className="w-5 h-5 mr-3 flex-shrink-0 text-dian-primary" />
                        <div>
                            <span className="block text-xs text-gray-500 uppercase tracking-wide">Correo Electrónico</span>
                            <a href={`mailto:${step.email}`} className="hover:underline text-lg">{step.email}</a>
                        </div>
                      </div>
                    )}

                    {step.notes && (
                      <div className="bg-white rounded-xl p-4 border border-gray-100">
                          <h4 className="text-sm font-semibold text-gray-900 mb-2 uppercase tracking-wide">Notas y Requisitos</h4>
                          <ul className="space-y-2">
                            {step.notes.map((note, idx) => (
                                <li key={idx} className="flex items-start text-gray-600">
                                <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                                <span>{note}</span>
                                </li>
                            ))}
                          </ul>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Info Box */}
        <div className="mt-16 bg-gradient-to-r from-dian-primary to-dian-dark text-white rounded-2xl p-8 shadow-xl">
           <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
             <div className="flex-1">
               <h4 className="text-xl font-bold mb-2 flex items-center">
                 <AlertCircle className="w-6 h-6 mr-2 text-yellow-400" />
                 Información Adicional
               </h4>
               <ul className="space-y-2 text-blue-100">
                 <li>• Recibirá confirmación en el correo registrado en el RUT.</li>
                 <li>• El número y fecha asignado debe corresponder a la fecha de la cita.</li>
                 <li>• Citas incumplidas se entenderán como solicitudes no presentadas.</li>
               </ul>
             </div>
             <div className="bg-white/10 p-4 rounded-xl backdrop-blur-sm text-center min-w-[200px]">
               <span className="block text-3xl font-bold text-yellow-400">50 Días</span>
               <span className="text-sm text-blue-200">Hábiles para resolver la solicitud</span>
             </div>
           </div>
        </div>
      </div>
    </section>
  );
};