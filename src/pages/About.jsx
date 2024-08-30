const About = () => (
  <section id="about" className="py-16 bg-gray-100">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-8">Sobre Nosotros</h2>
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h3 className="text-2xl font-semibold mb-4">Nuestra Misión</h3>
          <p className="text-lg text-gray-700">
            En Rung SAS, nos dedicamos a ofrecer soluciones de automatización innovadoras que mejoran la eficiencia y productividad en diferentes industrias.
          </p>
        </div>
        <div className="md:w-1/2">
          <h3 className="text-2xl font-semibold mb-4">Nuestro Equipo</h3>
          <p className="text-lg text-gray-700">
            Contamos con un equipo de expertos altamente capacitados que trabajan incansablemente para entregar soluciones personalizadas que cumplen con las necesidades específicas de nuestros clientes.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default About;
