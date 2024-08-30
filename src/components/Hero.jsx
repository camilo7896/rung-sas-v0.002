const Hero = () => (
  <div 
    className="hero min-h-screen bg-base-200 mt-16" 
    style={{ 
      backgroundImage: 'url(https://img.freepik.com/foto-gratis/concepto-collage-control-calidad-estandar_23-2149595839.jpg?t=st=1724986686~exp=1724990286~hmac=02554a15730b3e985c030aa0de29538ee5fbcc8eccef23b8be79669eb8c074d0&w=740)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}
  >
    <div className="hero-overlay bg-opacity-60"></div>
    <div className="hero-content text-center text-neutral-content">
      <div className="max-w-md">
        <h1 className="text-5xl font-bold">Automatiza con Rung SAS</h1>
        <p className="py-6">En Rung SAS, nos especializamos en ofrecer servicios de automatización de vanguardia para optimizar tus operaciones empresariales.</p>
        <a href="https://wa.me/3132361040" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Contáctanos por WhatsApp</a>
      </div>
    </div>
  </div>
);

export default Hero;

