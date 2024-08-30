const Services = () => (
  <section id="services" className="py-16 bg-white">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-8">Nuestros Servicios</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-4">Automatización de Procesos</h3>
          <p>Optimizamos tus procesos internos para mejorar la eficiencia y reducir costos.</p>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-4">Consultoría en Tecnología</h3>
          <p>Te asesoramos en la implementación de tecnologías avanzadas para tus operaciones.</p>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-4">Desarrollo de Software Personalizado</h3>
          <p>Creación de soluciones de software a medida para satisfacer tus necesidades específicas.</p>
        </div>
      </div>
    </div>
  </section>
);

export default Services;
