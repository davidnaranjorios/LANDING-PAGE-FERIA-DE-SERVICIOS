import React from 'react';
import { AlertTriangle, FileCheck, ClipboardList, UserCheck } from 'lucide-react';

export const ModuleInconsistencias: React.FC = () => {
  return (
    <section id="inconsistencias" className="py-20 bg-dian-light/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-dian-dark sm:text-4xl">Corrección de Inconsistencias</h2>
          <p className="mt-4 text-lg text-gray-600">Declaraciones y/o Recibos de Pago</p>
          <div className="w-24 h-1 bg-dian-accent mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          
          {/* Main Card: Inconsistencias */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
            <div className="bg-dian-primary p-6">
              <h3 className="text-xl font-bold text-white flex items-center">
                <AlertTriangle className="mr-2" />
                Corrección y Requisitos
              </h3>
            </div>
            <div className="p-8 space-y-6">
              <div>
                <h4 className="font-semibold text-dian-dark mb-2 border-b pb-1">Objetivo</h4>
                <p className="text-gray-700">Garantizar la corrección de datos inconsistentes conforme al artículo 43 de la Ley 962 de 2005.</p>
              </div>

              <div>
                <h4 className="font-semibold text-dian-dark mb-2 border-b pb-1">Tipos de Corrección</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li><span className="font-medium">Formulario 490:</span> Error en NIT, año, periodo o concepto.</li>
                  <li><span className="font-medium">Declaraciones:</span> Omisión o error de imputación de saldo a favor o anticipo.</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-dian-dark mb-3 flex items-center">
                  <ClipboardList className="w-5 h-5 mr-2 text-dian-accent" />
                  Datos requeridos en la petición
                </h4>
                <ul className="text-sm text-gray-700 space-y-1 grid grid-cols-1 sm:grid-cols-2 gap-x-4">
                  <li>• Nombre o razón social</li>
                  <li>• N.I.T.</li>
                  <li>• Tipo de impuesto</li>
                  <li>• Año y período</li>
                  <li>• Número de formulario</li>
                  <li>• Casilla a corregir</li>
                  <li>• Valor errado vs correcto</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Secondary Card: Actualización de Saldos */}
          <div className="flex flex-col gap-6">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 flex-1">
              <div className="bg-dian-dark p-6">
                <h3 className="text-xl font-bold text-white flex items-center">
                  <FileCheck className="mr-2" />
                  Actualización de Saldos (Reprocesos)
                </h3>
              </div>
              <div className="p-8">
                <p className="text-gray-700 mb-6">
                  Radicar solicitud firmada por representante legal dirigida al GIT de Contabilidad y Control de Obligaciones (vía PQSRD) para recalcular saldos que no reflejan el valor real por documentos no incorporados.
                </p>
                
                <div className="border-t pt-4">
                   <h4 className="font-semibold text-dian-dark mb-3 flex items-center">
                    <UserCheck className="w-5 h-5 mr-2 text-dian-accent" />
                    Anexos Obligatorios (Ambos trámites)
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start">
                      <span className="text-dian-accent mr-2">✓</span>
                      Copia de la cédula del representante legal.
                    </li>
                    <li className="flex items-start">
                      <span className="text-dian-accent mr-2">✓</span>
                      Certificado de existencia y representación legal (vigencia &lt; 3 meses).
                    </li>
                    <li className="flex items-start">
                      <span className="text-dian-accent mr-2">✓</span>
                      Para Reprocesos: Copia del documento (declaración, recibo, acto admin) no reflejado.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
             <div className="bg-blue-600 rounded-xl p-6 text-white shadow-lg text-center">
                <p className="font-medium text-lg">Canal de Radicación</p>
                <p className="opacity-90 mt-1">Buzón de PQSRD - DIAN</p>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};