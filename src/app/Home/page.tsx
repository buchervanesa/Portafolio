 /* eslint-disable @next/next/no-img-element */
'use client'
import { useEffect, useState } from 'react';
import Projects from '../Projects/page';
import vane from '../../../public/img/vanefotobien.png'
import Image from 'next/image';
import About from '../About/page';
import WorkExperience from '../Experience/page';
import Contact from '../Contact/page';
export default function Home1() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 500); // El contenido aparece después de 500ms
  }, []);

  return (
    <div className={`min-h-screen bg-gradient-to-r from-gray-900 via-gray-700 to-gray-500 text-white ${isVisible ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000 ease-out`}>
    <div className="container mx-auto p-16">
    
      <div className="flex flex-col items-center mb-10">

  <h1 className="text-5xl font-bold mb-8 text-center text-gray-100">Bienvenido a mi Portafolio</h1>
  <p className="text-xl text-gray-300 mb-6 text-center">
    Soy <span className="font-semibold">Vanesa Bucher</span>, apasionada por el Front-End y el desarrollo Full-Stack.
  </p>  
  <Image
    src={vane} // Reemplaza esto con la ruta de tu foto
    alt="Foto de Vanesa Bucher"
    className="w-40 h-40 rounded-full object-cover border-4 border-white shadow-lg "
  />
</div>
      <h2 className="text-3xl font-semibold mb-6 text-gray-200">Tecnologías que manejo</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
  {/* Card Component */}
  {[
    { name: 'React', icon: 'fab fa-react', color: 'text-blue-500', description: 'Biblioteca para construir interfaces de usuario interactivas.' },
    { name: 'JavaScript', icon: 'fab fa-js', color: 'text-yellow-500', description: 'Lenguaje de programación para crear sitios web dinámicos.' },
    { name: 'Node.js', icon: 'fab fa-node-js', color: 'text-green-500', description: 'Plataforma para el desarrollo de aplicaciones del lado del servidor.' },
    { name: 'Bootstrap', icon: 'fab fa-bootstrap', color: 'text-purple-500', description: 'Framework para el desarrollo de sitios web con diseño adaptable.' },
    { name: 'CSS', icon: 'fab fa-css3-alt', color: 'text-blue-400', description: 'Estilos visuales para personalizar la apariencia de los sitios web.' },
    { name: 'Tailwind CSS', icon: 'fab fa-tailwindcss', color: 'text-teal-400', description: 'Framework de CSS para diseñar interfaces rápidamente.' },
    { name: 'Express', icon: 'fas fa-server', color: 'text-gray-600', description: 'Framework para construir APIs rápidas y escalables con Node.js.' },
    { name: 'TypeORM', icon: 'fas fa-database', color: 'text-red-500', description: 'ORM para interactuar con bases de datos en aplicaciones TypeScript.' },
  ].map((tech) => (
    <div key={tech.name} className="card bg-gray-800 p-5 shadow-lg rounded-lg hover:shadow-2xl transform transition duration-300 hover:scale-105">
      <i className={`${tech.icon} ${tech.color} text-5xl mb-4`}></i>
      <h3 className="text-xl text-gray-100 font-semibold mb-2">{tech.name}</h3>
      <p className="text-gray-400">{tech.description}</p>
    </div>
  ))}
</div>
    </div> 
    <Projects />
    <About/>
    <WorkExperience/>
    <Contact/>

 
  </div>
  );
}  
