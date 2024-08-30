// TermsConditions.jsx
const TermsConditions = () => (
  <>
    <section id="terms" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">Términos y Condiciones</h1>
        <div className="prose max-w-full mx-auto">
          <p>
            Bienvenido a Rung SAS. Al acceder y utilizar nuestro sitio web y servicios, aceptas los siguientes términos y condiciones.
          </p>
          <h2>1. Aceptación de los Términos</h2>
          <p>
            Al utilizar nuestros servicios, aceptas estos términos y condiciones en su totalidad. Si no estás de acuerdo con alguna parte de estos términos, por favor no utilices nuestros servicios.
          </p>
          <h2>2. Modificaciones</h2>
          <p>
            Podemos modificar estos términos en cualquier momento. Los cambios entrarán en vigor al ser publicados en nuestro sitio web. Es tu responsabilidad revisar periódicamente estos términos para estar al tanto de cualquier modificación.
          </p>
          <h2>3. Uso de los Servicios</h2>
          <p>
            Utilizarás nuestros servicios de manera legal y de acuerdo con las leyes aplicables. Eres responsable de cualquier contenido que publiques y de asegurarte de que no infringe los derechos de terceros.
          </p>
          <h2>4. Limitación de Responsabilidad</h2>
          <p>
            No seremos responsables por daños directos, indirectos, incidentales, especiales o consecuentes que resulten del uso de nuestros servicios o del incumplimiento de estos términos.
          </p>
          <h2>5. Terminación</h2>
          <p>
            Podemos suspender o cancelar tu acceso a nuestros servicios si violas estos términos. En caso de terminación, se aplicarán las disposiciones de estos términos que por su naturaleza deben sobrevivir.
          </p>
          <h2>6. Ley Aplicable</h2>
          <p>
            Estos términos se regirán e interpretarán de acuerdo con las leyes del país en el que operamos, sin tener en cuenta los principios de conflicto de leyes.
          </p>
          <p>
            Si tienes alguna pregunta sobre estos términos, por favor contáctanos a través de la información de contacto disponible en nuestro sitio web.
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
  </>
);

export default TermsConditions;
