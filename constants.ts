import { FloorItem, LinkItem, StepItem } from './types';

export const COBRANZAS_LIST: FloorItem[] = [
  { title: "GIT. Administración de Cobro", floor: "Piso 12" },
  { title: "GIT. Normalización de Saldos", floor: "Piso 11" },
  { title: "GIT. Menores Cuantías", floor: "Piso 11" },
  { title: "GIT. Contabilidad y Control de obligaciones", floor: "Piso 10" },
  { title: "GIT. Cobro coactivo y ejecución de Bienes", floor: "Piso 9" },
  { title: "GIT. Representación Externa", floor: "Piso 7" },
  { title: "GIT. Devoluciones Personas Jurídicas", floor: "Piso 6" },
  { title: "GIT. Devoluciones Personas Naturales", floor: "Piso 5" },
  { title: "GIT. Secretaria / Facilidades", floor: "Piso 3 y 4" },
];

export const FACILIDADES_LINKS: LinkItem[] = [
  {
    title: "ABC FACILIDADES DE PAGO",
    url: "https://www.dian.gov.co/tramitesservicios/Tramites_Impuestos/Facilidades_de_pago/Paginas/default.aspx",
    type: "external"
  },
  {
    title: "FORMATO SOLICITUD FACILIDADES DE PAGO",
    url: "/SOLICITUD.pdf",
    type: "download"
  }
];

export const DEVOLUCIONES_STEPS: StepItem[] = [
  {
    number: "1",
    title: "Verifique los requisitos",
    description: "Consulte los requisitos generales y especiales según el tipo de impuesto. Diríjase a la opción: “Devolución de Pagos en Exceso y Pagos de lo No Debido Tributarios”.",
    links: [
      {
        title: "Ver Requisitos y Trámites",
        url: "https://www.dian.gov.co/tramitesservicios/Tramites_Impuestos/Devoluciones/Paginas/Tramite-y-requisitos.aspx",
        type: "external"
      }
    ],
    notes: ["Decreto 1625 de 2016: Artículos 1.6.1.21.13, 1.6.1.21.21 y 1.6.1.21.27"]
  },
  {
    number: "2",
    title: "Agende la cita virtual",
    description: "Realice el agendamiento de manera independiente por cada recibo de pago.",
    links: [
      {
        title: "Agendamiento Digiturno DIAN",
        url: "https://agendamientodigiturno.dian.gov.co/",
        type: "external"
      }
    ],
    notes: ["La cita asignada será para radicar la solicitud (no requiere presencialidad)."]
  },
  {
    number: "3",
    title: "Radique la solicitud",
    description: "Descargue y diligencie los formatos, luego envíe la solicitud por correo.",
    links: [
      {
        title: "Descargar Formato 010",
        url: "https://www.dian.gov.co/Transaccional/DevolucionesCompensacin/010-Solicitud-de-Devolucion-y-o-Compensacion.pdf",
        type: "download"
      },
      {
        title: "Ver Instructivo de Diligenciamiento",
        url: "https://raw.githubusercontent.com/ofriasy/publico/903e454b497949190a4f48de0ce7343c2ee23014/instructivo_010.pdf",
        type: "external"
      }
    ],
    email: "dsi_cali_devoluciones@dian.gov.co",
    notes: [
      "Indique en el asunto el número de cita.",
      "Radicar desde el correo registrado en el RUT.",
      "Firma del representante legal o apoderado requerida.",
      "Solicitud independiente por cada recibo."
    ]
  }
];
