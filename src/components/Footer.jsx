const Footer = () => (
  <footer className="bg-gray-800 text-white py-4">
    <div className="container mx-auto px-4">
      <div className="flex justify-between items-center">
        <div className="text-sm">
          <p>&copy; {new Date().getFullYear()} Rung S.A.S. Todos los derechos reservados.</p>
        </div>
        <div className="text-sm">
        <a href="/privacy-policy" className="hover:underline">Política de Privacidad</a>
        <span className="mx-2">|</span>
        <a href="/terms-conditions" className="hover:underline">Términos y Condiciones</a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
