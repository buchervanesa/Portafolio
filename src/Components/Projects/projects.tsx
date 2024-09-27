'use client'
import { useEffect, useState } from 'react';

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 } // El contenido se vuelve visible cuando el 20% está en pantalla
    );

    const section = document.querySelector('#proyectos');
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <div id="proyectos" className={`min-h-screen bg-white text-black transition-all duration-1000 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-6">Mis Proyectos</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Tarjetas de proyectos */}
          <div className="p-6 bg-gray-100 rounded-lg shadow-lg">Proyecto 1</div>
          <div className="p-6 bg-gray-100 rounded-lg shadow-lg">Proyecto 2</div>
          <div className="p-6 bg-gray-100 rounded-lg shadow-lg">Proyecto 3</div>
        </div>
      </div>
    </div>
  );
}
