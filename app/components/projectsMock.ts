import { StaticImageData } from "next/image";
import bedList from "../../public/bedsList.png";
import formAndListNurses from "../../public/formAndListNurses.png";
import formAndListPatients from "../../public/formAndListPatients.png";
import homeDashboard from "../../public/homeDashboard.png";
import recepcionistDashboard from "../../public/recepcionistDashboard.png";
import screens from "../../public/screens.jpg";
import staysDashboard from "../../public/staysDashboard.jpeg";
import mobileApp from "../../public/mobileApp.png";

interface Project {
  id: string;
  title: string;
  period: string;
  description: string;
  details?: string | string[];
  technologies: string[];
  imageProject?: Array<{
    description?: string;
    image: StaticImageData;
  }>;
}

export const projects: Project[] = [
  {
    id: "sanatorio-app",
    title: "Sanatorio App",
    period: "Co-owner",
    description:
      "Sistema integral de llamado de enfermería que combina botones físicos con una aplicación web de gestión.",
    details: [
      "Fabricación e integración de botones físicos utilizando placas ESP8266 (Arduino) que permiten a los pacientes realizar llamados desde sus habitaciones.",
      "Sistema dual de llamados: aplicación móvil para pacientes y botones físicos en cada cama, sincronizados para alertar al personal de turno.",
      "Cada botón está vinculado a una habitación específica y envía una señal al servidor al ser presionado.",
      "La aplicación web fue desarrollada con Next.js, TailwindCSS y Prisma, permitiendo una gestión intuitiva del sistema.",
      "Sistema de autenticación con control de acceso según rol (Admin, Enfermera, Paciente).",
      "Las enfermeras reciben notificaciones instantáneas al producirse un llamado, y pueden visualizar en tiempo real el estado de cada paciente.",
      "Cada paciente activo se muestra como una tarjeta con colores distintivos según el estado del llamado (pendiente, atendido, etc.).",
      "Dashboard para administradores con la capacidad de gestionar usuarios, habitaciones, y asignaciones de dispositivos físicos.",
      "La comunicación entre hardware y backend se realiza vía HTTP para reflejar el estado en tiempo real en la interfaz.",
      "Testeo del sistema en contexto real dentro de un sanatorio, logrando mejoras en la velocidad de atención y satisfacción del personal médico.",
    ],
    technologies: [
      "Next.js",
      "TailwindCSS",
      "Prisma",
      "TypeScript",
      "ESP8266",
      "Arduino IDE",
      "Node.js",
    ],
    imageProject: [
      {
        description: "Pantallas",
        image: screens,
      },
      {
        description: "Lista de camas",
        image: bedList,
      },
      {
        description: "Formulario y lista de enfermeras",
        image: formAndListNurses,
      },
      {
        description: "Formulario y lista de pacientes",
        image: formAndListPatients,
      },
      {
        description: "Dashboard principal",
        image: homeDashboard,
      },
      {
        description: "Dashboard de recepción",
        image: recepcionistDashboard,
      },
      {
        description: "Dashboard de estadías",
        image: staysDashboard,
      },
      {
        description: "App mobile, login del usuario y boton",
        image: mobileApp,
      },
    ],
  },
  {
    id: "cryptotrunks",
    title: "Cryptotrunks",
    period: "2022 - Actualidad",
    description:
      "Frontend para un proyecto web3 con minting y gestión de NFTs.",
    details: [
      "Desarrollo del frontend utilizando React, TypeScript y Web3.js para la interacción con contratos inteligentes.",
      "Implementación de un sistema de paginación personalizado para la visualización de NFTs en la galería.",
      "Consumo de APIs externas para obtener metadata de NFTs y precios de tokens.",
      "Desarrollo de funciones para mintear NFTs, incluyendo validación de transacciones y manejo de estados de carga.",
      "Implementación de un sistema de notificaciones para feedback de transacciones en la blockchain.",
      "Diseño modular con SCSS Modules para mantener estilos encapsulados y reutilizables.",
      "Integración de Web3Modal para la conexión de wallets (MetaMask, WalletConnect, etc.).",
      "Optimización de rendimiento con lazy loading de componentes y memoización.",
      "Implementación de un sistema de filtrado y búsqueda de NFTs por atributos.",
      "Desarrollo de un dashboard para usuarios con estadísticas de sus NFTs y transacciones.",
    ],
    technologies: ["React", "TypeScript", "Web3.js", "Solidity", "SCSS Modules", "Web3Modal"],
  },

  {
    id: "e-commerce",
    title: "E-commerce",
    period: "2022",
    description: "Como proyecto final durante mis estudios en el bootcamp.",
    details: [
      "Desarrollo de una app completa de un E-commerce con diseño y desarrollo de las siguientes features básicas de e-commerce (CRUD de productos, auth, catálogo, checkout, etc...).",
      "Integración pasarela de Pago (Stripe)",
      "Envio de emails transaccionales (nodemailer)",
      "Administración de carrito de compras y órdenes de productos",
      "Administración de usuarios, gestión de claves",
    ],
    technologies: ["React", "Node.js", "MongoDB", "Express"],
  },
  {
    id: "spa-app",
    title: "SPA App",
    period: "2022",
    description:
      "Como proyecto individual durante mis estudios en el bootcamp.",
    details:
      "Single Page Application desarrollada como proyecto de aprendizaje.",
    technologies: ["React", "JavaScript", "CSS"],
  },
];
