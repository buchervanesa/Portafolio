import React from "react";

export const Contact = () => {
  return (
    <div>
      <section className=" text-center mt-10 p-7 ">
        <h2 className="text-4xl font-semibold text-gray-200  mb-6">Contáctame</h2>
        
        {/* Información de contacto personal */}
        <div className="mb-10">
          <p className="text-xl text-gray-200 mb-4">Vanesa Bucher</p>
          
          {/* Enlace a GitHub */}
          <a 
            href="https://github.com/buchervanesa" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-blue-400 hover:underline block mb-2"
          >
            GitHub: https://github.com/buchervanesa
          </a>
          
          {/* Enlace a LinkedIn */}
          <a 
            href="https://www.linkedin.com/in/vanesa-bucher-623295245/?trk=opento_sprofile_topcard" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-blue-400 hover:underline block mb-2"
          >
            LinkedIn:https://www.linkedin.com/in/vanesa-bucher-623295245/?trk=opento_sprofile_topcard
          </a>
          
          {/* Correo electrónico */}
              <a
  href="https://wa.me/5493764127995" // número de teléfono internacional sin signos ni espacios
  target="_blank"
  rel="noopener noreferrer"
  className="text-blue-400 hover:underline block mb-2"
>
 Celular: +5493764127995
</a>
            <p className="text-blue-400 ">   Correo: buchervanesa@gmail.com</p> 
  
            
         
        </div>
        
        {/* Botón para descargar el CV */}
       
      </section>
    </div>
  );
};

export default Contact;