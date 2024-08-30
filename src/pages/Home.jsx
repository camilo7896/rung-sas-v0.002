import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from './About';
import Services from './Services';
import Footer from '../components/Footer';
import Contact from '../components/Contact';
import ParallaxSection from '../components/ParallaxSection';

const Home = () => {
  return (
    <>
    <Navbar />
    <ParallaxSection/>
    <Hero />
    <About />
    <Services />
    <Contact/>
    <Footer/>
  </>
  );
}

export default Home;
