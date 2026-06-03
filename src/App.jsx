import Navbar from './components/Navbar';
import Masthead from './sections/Masthead';
import About from './sections/About';
import Portfolio from './sections/Portfolio';
import Pricing from './sections/Pricing';
import Contact from './sections/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Masthead />
      <About />
      <Portfolio />
      <Pricing />
      <Contact />
      <Footer />
    </>
  );
}

export default App;