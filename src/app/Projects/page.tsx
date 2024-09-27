 /* eslint-disable @next/next/no-img-element */
"use client";
import Image from "next/image";
import boda from "../../../public/img/boda.png";
import abogado from "../../../public/img/abogado.png";
import electronica from "../../../public/img/electronica.png";
import bp from "../../../public/img/bp.png";
export default function Projects() {
 

 


  return (
<div className="py-10 bg-gray-900 p-10">
  <h1 className="text-5xl font-bold text-white mb-8 text-center">
    Mis Proyectos
  </h1>
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
    {/* Proyecto 1 - Página de Casamiento */}
    <div className="p-4 bg-gray-600 border-black rounded-lg shadow-md flex flex-col items-center justify-center">
      <h2 className="text-xl text-white font-semibold mb-3 text-center">Nuestra Boda</h2>
      <Image
        src={boda} 
        alt="Proyecto Nuestra Boda"
        width={400}
        height={250}
        className="rounded-lg shadow-md mb-4"
      />
      <p className="text-gray-200 mb-3 text-center">
        <strong>Nuestra Boda</strong> es una página web creada para un casamiento, donde los invitados pueden confirmar asistencia.
      </p>
      <p className="text-white mb-5 text-center">
        Los invitados también pueden consultar detalles importantes como la ubicación y el horario del evento. Diseño moderno y accesible.
      </p>
      <a
        href="https://nuestra-boda-natuycharly.web.app/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white bg-blue-500 px-3 py-1 rounded-md inline-block"
      >
        Ver Proyecto
      </a>
    </div>

    {/* Proyecto 2 - Estudio Jurídico */}
    <div className="p-4 bg-gray-600 border-black rounded-lg shadow-md flex flex-col items-center justify-center">
      <h2 className="text-xl text-white font-semibold mb-3 text-center">Estudio Jurídico Ayala & Asoc</h2>
      <Image
        src={abogado} 
        alt="Estudio Jurídico Ayala & Asoc"
        width={400}
        height={250}
        className="rounded-lg shadow-md mb-4"
      />
      <p className="text-gray-200 mb-3 text-center">
        <strong>Estudio Jurídico Ayala & Asoc</strong> es una web informativa sobre servicios legales. Proporciona acceso a las áreas de práctica y contacto fácil.
      </p>
      <p className="text-white mb-5 text-center">
        La plataforma facilita la interacción con los clientes y está diseñada para brindar una experiencia profesional.
      </p>
      <a
        href="https://estudiojuridicoayalayasociado.firebaseapp.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white bg-blue-500 px-3 py-1 rounded-md inline-block"
      >
        Ver Proyecto
      </a>
    </div>

    {/* Proyecto 3 - ElectroShop */}
    <div className="p-4 bg-gray-600 border-black rounded-lg shadow-md flex flex-col items-center justify-center">
      <h2 className="text-xl text-white font-semibold mb-3 text-center">ElectroShop</h2>
      <Image
        src={electronica} 
        alt="ElectroShop"
        width={400}
        height={250}
        className="rounded-lg shadow-md mb-4"
      />
      <p className="text-gray-200 mb-3 text-center">
        <strong>ElectroShop</strong> es una tienda en línea de productos electrónicos. Ofrece teléfonos, laptops y más, con descripciones detalladas.
      </p>
      <p className="text-white mb-5 text-center">
        Con un sistema de filtros , la experiencia de compra es rápida y segura. Diseño moderno y eficiente.
      </p>
      <a
        href="https://m4-nextjs-vane.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white bg-blue-500 px-3 py-1 rounded-md inline-block"
      >
        Ver Proyecto
      </a>
    </div>

    {/* Proyecto 4 - Consultora RH Soluciones */}
    <div className="p-4 bg-gray-600 border-black rounded-lg shadow-md flex flex-col items-center justify-center">
      <h2 className="text-xl text-white font-semibold mb-3 text-center">Consultora RH Soluciones</h2>
      <Image
        src={bp} 
        alt="Consultora RH Soluciones"
        width={400}
        height={250}
        className="rounded-lg shadow-md mb-4"
      />
      <p className="text-gray-200 mb-3 text-center">
        <strong>Consultora RH Soluciones</strong> es una plataforma privada para gestionar usuarios, archivos y facturación.
      </p>
      <p className="text-white mb-5 text-center">
        Exclusiva para empleados con autenticación segura. Mejora la organización interna y optimiza procesos de recursos humanos.
      </p>
      <a
        href="https://app.bpventures.com.ar/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white bg-blue-500 px-3 py-1 rounded-md inline-block"
      >
        Ver Proyecto
      </a>
    </div>
  </div>
</div>

  );
}
