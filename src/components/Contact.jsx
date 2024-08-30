import { useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      name,
      email,
      message,
      phone,
      city,
    };

    emailjs
      .send('default_service', 'template_ppmnpqi', templateParams, 'user_s4Ni5coA5PAH3jRvxFGAX')
      .then((response) => {
        console.log('Correo enviado exitosamente:', response);
        setStatus('Correo enviado exitosamente.');
        setName('');
        setEmail('');
        setMessage('');
        setPhone('');
        setCity('');
      })
      .catch((error) => {
        console.error('Error al enviar el correo:', error);
        setStatus('Error al enviar el correo.');
      });
  };

  return (
    <section id="contact" className="relative py-16 bg-gray-100">
      <div className="relative container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-3xl font-bold mb-4">Contacto</h2>
            <p className="text-lg text-gray-700 mb-8">
              Si tienes alguna pregunta o necesitas más información, no dudes en contactarnos. Completa el formulario a continuación y nos pondremos en contacto contigo lo antes posible.
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-lg font-medium text-gray-700">Nombre</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-lg font-medium text-gray-700">Correo Electrónico</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                  required
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-lg font-medium text-gray-700">Teléfono</label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                />
              </div>
              <div>
                <label htmlFor="city" className="block text-lg font-medium text-gray-700">Ciudad</label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-lg font-medium text-gray-700">Mensaje</label>
                <textarea
                  id="message"
                  name="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                  rows="4"
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary">Enviar Mensaje</button>
              {status && <p className="mt-4 text-lg font-semibold">{status}</p>}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
