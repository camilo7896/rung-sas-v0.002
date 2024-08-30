import { useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [contactReason, setContactReason] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      name,
      email,
      city,
      phone,
      subject,
      message,
      contactReason,
    };

    console.log('Datos enviados:', templateParams);  // Verificar los datos enviados

    emailjs
      .send('default_service', 'template_ppmnpqi', templateParams, 'user_s4Ni5coA5PAH3jRvxFGAX')
      .then((response) => {
        console.log('Correo enviado exitosamente:', response);
        setStatus('Correo enviado exitosamente.');
        setName('');
        setEmail('');
        setCity('');
        setPhone('');
        setSubject('');
        setMessage('');
        setContactReason('');
      })
      .catch((error) => {
        console.error('Error al enviar el correo:', error);
        setStatus('Error al enviar el correo.');
      });
  };

  return (
    <section id="contact" className="relative py-16 bg-gray-100">
      <img
        src={
          'https://img.freepik.com/foto-gratis/concepto-control-calidad-estandar-m_23-2150041845.jpg?t=st=1724987180~exp=1724990780~hmac=6b863855e2b0cc1ecf88c5172925aa1606843defa44b56d823ccd295addb8005&w=740'
        }
        alt="Contacto"
        className="absolute inset-0 w-full h-full object-cover opacity-30"
      />
      <div className="relative container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-3xl font-bold mb-4">Contacto</h2>
            <p className="text-lg text-gray-700 mb-8">
              Si tienes alguna pregunta o necesitas más información, no dudes en contactarnos. Completa el formulario a continuación y nos pondremos en contacto contigo lo antes posible.
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-lg font-medium text-gray-700">
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-lg font-medium text-gray-700">
                  Correo Electrónico
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
                />
              </div>
              <div>
                <label htmlFor="city" className="block text-lg font-medium text-gray-700">
                  Ciudad
                </label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  required
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-lg font-medium text-gray-700">
                  Teléfono
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-lg font-medium text-gray-700">
                  Asunto
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
                />
              </div>
              <div>
                <label htmlFor="contactReason" className="block text-lg font-medium text-gray-700">
                  Motivo del Contacto
                </label>
                <select
                  id="contactReason"
                  name="contactReason"
                  value={contactReason}
                  onChange={(e) => setContactReason(e.target.value)}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
                >
                  <option value="">Seleccione un motivo</option>
                  <option value="consulta">Consulta</option>
                  <option value="soporte">Soporte</option>
                  <option value="sugerencia">Sugerencia</option>
                  <option value="otro">Otro</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-lg font-medium text-gray-700">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full px-4 py-2 bg-indigo-600 text-white rounded-md shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
              >
                Enviar
              </button>
              {status && <p className="mt-4 text-lg text-gray-700">{status}</p>}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
