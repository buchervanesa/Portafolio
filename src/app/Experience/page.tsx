import React from "react";

const WorkExperience = () => {
  return (
    <div className="bg-gray-900">
      <section className="bg-gray-900 text-center p-9">
        <h2 className="text-4xl font-semibold text-gray-200 ">Experiencia Laboral</h2>
        
        {/* Detalle de la experiencia laboral */}
        <div className="mb-10">
          {/* Primer trabajo */}
          <div className="mb-6">
            <h3 className="text-2xl text-gray-300 font-bold">Desarrollador Frontend</h3>
            <p className="text-xl text-gray-400">Empresa BpVentures - Septiembre 2024 </p>
            <p className="text-lg text-gray-400">Desarrollo de interfaces de usuario utilizando Next.js y Tailwind.</p>
          </div>
          <div className="mb-6">
            <h3 className="text-2xl text-gray-300 font-bold">Desarrollador Full Stack</h3>
            <p className="text-xl text-gray-400">Desarrollo Web para una boda - Septiembre 2024 </p>
            <p className="text-lg text-gray-400">Desarrollo de interfaces de usuario utilizando React y Css. <br /> Creacion de una base de datos para Gestionar las asistencias de los invitados</p>
          </div>
          {/* Segundo trabajo */}
          <div className="mb-6">
            <h3 className="text-2xl text-gray-300 font-bold">Desarrollador Web</h3>
            <p className="text-xl text-gray-400">Freelancer - Junio 2024 </p>
            <p className="text-lg text-gray-400">Creación de sitios web responsivos para pequeñas pymes, con enfoque en rendimiento, y optimización para móviles.</p>
          </div>

          {/* Tercer trabajo */}
          <div className="">
          <h3 className="text-2xl text-gray-300 font-bold">Desarrollador Web</h3>
          <p className="text-xl text-gray-400">Freelancer - Agosto 2024 </p>
           <p className="text-lg text-gray-400">Creacion de Pagina Web para un estudio jurídico.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WorkExperience;