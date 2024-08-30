// PrivacyPolicy.jsx
const PrivacyPolicy = () => (
    <section id="privacy" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">Política de Privacidad</h1>
        <div className="prose max-w-full mx-auto">
          <p>
            En Rung SAS, valoramos tu privacidad y nos comprometemos a proteger tus datos personales. Esta política explica cómo recopilamos, utilizamos y protegemos tu información.
          </p>
          <h2>1. Información que Recopilamos</h2>
          <p>
            Recopilamos información personal que proporcionas al registrarte en nuestro sitio web, solicitar nuestros servicios, o al contactarnos. Esto puede incluir tu nombre, dirección de correo electrónico, número de teléfono, y otra información relevante.
          </p>
          <h2>2. Uso de la Información</h2>
          <p>
            Utilizamos tu información para brindarte nuestros servicios, responder a tus consultas, y mejorar nuestra oferta. No compartimos tu información con terceros sin tu consentimiento, salvo que sea necesario para cumplir con nuestras obligaciones legales.
          </p>
          <h2>3. Seguridad de los Datos</h2>
          <p>
            Implementamos medidas de seguridad para proteger tu información contra acceso no autorizado, alteración, divulgación o destrucción. Sin embargo, no podemos garantizar la seguridad absoluta en la transmisión de datos en línea.
          </p>
          <h2>4. Derechos del Usuario</h2>
          <p>
            Tienes derecho a acceder, corregir o eliminar la información personal que tenemos sobre ti. Si deseas ejercer estos derechos, por favor contáctanos.
          </p>
          <h2>5. Cambios a Esta Política</h2>
          <p>
            Podemos actualizar esta política de privacidad en el futuro. Te notificaremos de cualquier cambio publicando la nueva política en nuestro sitio web.
          </p>
          <p>
            Si tienes alguna pregunta sobre esta política, por favor contáctanos a través de la información de contacto disponible en nuestro sitio web.
          </p>
        </div>  
        <div className="text-center mt-8">
          <button
            onClick={() => window.history.back()}
            className="px-4 py-2 bg-indigo-600 text-white rounded-md shadow hover:bg-indigo-700"
          >
            Ir Atrás
          </button>
        </div>
      </div>
    </section>
  );
  
  export default PrivacyPolicy;
  