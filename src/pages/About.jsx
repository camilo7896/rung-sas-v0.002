
const About = () => {
  return (
    <section id="about" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <img src="https://img.freepik.com/foto-gratis/concepto-collage-control-calidad-estandar_23-2149595844.jpg?t=st=1724986934~exp=1724990534~hmac=58e1fb25db516aab63d3fb67ed962309439c151614706926ff989b7a6eef1034&w=740" alt="Sobre Nosotros" className="w-full h-auto rounded-lg shadow-lg"/>
          </div>
          <div className="md:w-1/2 md:pl-8">
            <h2 className="text-3xl font-bold mb-4">Sobre Nosotros</h2>
            <p className="text-lg text-gray-700">
              En Rung SAS, nos dedicamos a ofrecer soluciones de automatización personalizadas para mejorar la eficiencia y productividad de las empresas. Nuestro equipo de expertos trabaja en estrecha colaboración con cada cliente para entender sus necesidades y proporcionar soluciones a medida que optimicen sus procesos.
            </p>
            <p className="text-lg text-gray-700 mt-4">
              Con años de experiencia en el sector, hemos desarrollado una sólida reputación por nuestra innovación y compromiso con la calidad. Estamos aquí para ayudar a tu empresa a alcanzar su máximo potencial a través de la automatización.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
