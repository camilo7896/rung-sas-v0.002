const Footer = () => (
  <footer className="bg-gray-800 text-white py-6">
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row justify-between items-center">
        {/* Sección de Información de Contacto */}
        <div className="text-sm text-center md:text-left mb-4 md:mb-0">
          <h2 className="text-lg font-bold mb-2">Información de Contacto</h2>
          <p className="mt-2">Calle 15B # 5-34 Duitama (Boyacá)</p>
          <p>Tel: +57 301 2051987</p>
        </div>
        
        {/* Sección de Políticas */}
        <div className="text-sm text-center md:text-right">
          <a href="/privacy-policy" className="hover:underline">Política de Privacidad</a>
          <span className="mx-2">|</span>
          <a href="/terms-conditions" className="hover:underline">Términos y Condiciones</a>
        </div>
      </div>
      <p>&copy; {new Date().getFullYear()} Rung S.A.S. Todos los derechos reservados.</p>

    </div>
  </footer>
);

export default Footer;
