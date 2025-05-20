import React from "react";

const WorkExperience = () => {
  const jobs = [
    {
      title: "Desarrolladora Frontend Freelance",
      company: "Sofnet",
      date: "Feb 2025 – Abr 2025",
      location: "Trabajo remoto (Perú)",
      tasks: [
        "Desarrollé el frontend de un sistema de gestión de agendas orientado al mercado chileno.",
        "Implementé componentes reutilizables y páginas responsivas utilizando React.js y MUI Material.",
        "Colaboré estrechamente con el equipo de backend para integrar APIs y optimizar la experiencia de usuario.",
        "Participé en reuniones de planificación y seguimiento de proyecto, contribuyendo a mejorar los tiempos de entrega.",
      ],
    },
    {
      title: "Front End",
      company: "InmoUp",
      date: "Nov 2024 – Ene 2025",
      location: "Mendoza, Argentina",
      tasks: [
        "Contribuí en la integración y desarrollo de componentes reutilizables utilizando React 10.",
        "Participé activamente en la estructuración de la página web, optimizando su diseño y funcionalidad.",
        "Colaboré con el equipo mediante herramientas de gestión como Trello y Backlog.",
      ],
    },
    {
      title: "Desarrolladora Full Stack",
      company: "BPVentures",
      date: "Septiembre 2024 – Octubre 2024",
      location: "Buenos Aires, Argentina",
      tasks: [
        "Desarrollé una plataforma integral para la gestión de usuarios y facturación, mejorando la eficiencia operativa.",
        "Implementé un sistema de login seguro con autenticación multifactor (MFA), garantizando la protección de datos.",
        "Diseñé y desarrollé un módulo de facturación junto con un panel de permisos administrativos dinámico.",
      ],
    },
    {
      title: "Desarrolladora Frontend",
      company: "Plataforma de Gestión de Bodas",
      date: "Septiembre 2024",
      location: "",
      tasks: [
        "Desarrollo de una plataforma para la gestión de bodas.",
        "Permite a los usuarios confirmar asistencia y gestionar información de invitados.",
        "Tecnologías utilizadas: React, Tailwind CSS y CSS.",
      ],
    },
    {
      title: "Desarrolladora Web",
      company: "Freelancer - Páginas para PYMEs",
      date: "Junio 2024",
      location: "",
      tasks: [
        "Creación de sitios web responsivos para pequeñas pymes.",
        "Enfoque en rendimiento y optimización para dispositivos móviles.",
      ],
    },
    {
      title: "Desarrolladora Full Stack",
      company: "Estudio Jurídico Ayala & Asociados",
      date: "Agosto 2024",
      location: "",
      tasks: [
        "Desarrollo de un sitio web institucional para la presentación de servicios legales.",
        "Implementación de funcionalidades para gestión básica de clientes.",
        "Rol: Full Stack - diseño y desarrollo completo.",
      ],
    },
  ];

  return (
    <div className="bg-gray-900 py-16 px-6">
      <h2 className="text-4xl font-semibold text-gray-200 text-center mb-12">Experiencia Laboral</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {jobs.map((job, index) => (
          <div key={index} className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-bold text-gray-100">{job.title}</h3>
            <p className="text-gray-400 text-lg">{job.company}{job.date ? ` | ${job.date}` : ""}{job.location ? ` | ${job.location}` : ""}</p>
            <ul className="list-disc list-inside mt-4 text-gray-300 space-y-1">
              {job.tasks.map((task, idx) => (
                <li key={idx}>{task}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};
export default WorkExperience;