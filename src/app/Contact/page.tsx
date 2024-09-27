import React from "react";

export const Contact = () => {
  return (
    <div>
      <section className=" text-center mt-10 p-10 ">
        <h2 className="text-4xl font-semibold text-gray-200  mb-6">
          Contáctame
        </h2>


        <div className="mb-10">
          <p className="text-xl text-gray-200 mb-4">Vanesa Bucher</p>

     
          <a
            href="https://github.com/buchervanesa"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline block mb-2"
          >
            GitHub: https://github.com/buchervanesa
          </a>

        
          <a
            href="https://www.linkedin.com/in/vanesa-bucher-623295245/?trk=opento_sprofile_topcard"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline block mb-2"
          >
            LinkedIn:https://www.linkedin.com/in/vanesa-bucher-623295245/?trk=opento_sprofile_topcard
          </a>

         
          <a
            href="https://wa.me/5493764127995" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline block mb-2"
          >
            Celular: +5493764127995
          </a>
          <p className="text-blue-400 "> Correo: buchervanesa@gmail.com</p>
        </div>
      </section>
    </div>
  );
};

export default Contact;
