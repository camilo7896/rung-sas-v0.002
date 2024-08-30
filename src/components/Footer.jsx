
const Footer = () => {
  return (
    <footer className="footer p-10 bg-base-200 text-base-content">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <h2 className="text-xl font-bold">Rung SAS</h2>
          <p>Impulsando la eficiencia y la productividad a través de soluciones de automatización personalizadas.</p>
        </div>
        <div>
          <h2 className="text-xl font-bold">Enlaces Rápidos</h2>
          <ul className="menu menu-vertical">
            <li><a href="#home" className="link link-hover">Inicio</a></li>
            <li><a href="#about" className="link link-hover">Nosotros</a></li>
            <li><a href="#services" className="link link-hover">Servicios</a></li>
            <li><a href="#contact" className="link link-hover">Contacto</a></li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-bold">Síguenos</h2>
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-2xl text-blue-600 hover:text-blue-800">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-2xl text-pink-600 hover:text-pink-800">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-2xl text-blue-700 hover:text-blue-900">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
        <div>
          <h2 className="text-xl font-bold">Contacto</h2>
          <p>Correo: contacto@rungsas.com</p>
          <p>Teléfono: +1 (234) 567-8900</p>
        </div>
      </div>
      <div className="border-t border-base-300 mt-10 pt-4 text-center">
        <p>&copy; 2024 Rung SAS. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;
