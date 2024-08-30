
const Services = () => (
  <div id="services" className="min-h-screen bg-base-200 py-10">
    <div className="text-center">
      <h2 className="text-4xl font-bold">Nuestros Servicios</h2>
      <p className="py-6">
        Ofrecemos una amplia gama de servicios de automatización que se adaptan a las necesidades específicas de tu negocio, desde la automatización de procesos industriales hasta soluciones de software personalizadas.
      </p>
    </div>
    <div className="flex flex-wrap justify-center">
      {/* Aquí puedes agregar tarjetas o bloques para cada servicio */}
      <div className="card w-80 bg-base-100 shadow-xl m-4">
        <div className="card-body">
          <h3 className="card-title">Automatización de Procesos</h3>
          <p>Optimizamos y automatizamos procesos industriales para mejorar la eficiencia y reducir costos.</p>
        </div>
      </div>
      <div className="card w-80 bg-base-100 shadow-xl m-4">
        <div className="card-body">
          <h3 className="card-title">Desarrollo de Software</h3>
          <p>Desarrollamos soluciones de software a medida para automatizar tareas específicas y mejorar la productividad.</p>
        </div>
      </div>
      {/* Agrega más tarjetas para otros servicios */}
    </div>
  </div>
);

export default Services;
