import About from './components/About/About';
import Footer from './components/Footer/Footer';
import HeroSection from './components/HeroSection/HeroSection';
import NavigationBar from './components/NavigationBar/NavigationBar';
import Subscribe from './components/Subscribe/Subscribe';
import WhyUs from './components/WhyUs/WhyUs';

function App() {
  return (
    <>
      <NavigationBar />
      <HeroSection />
      <About />
      <WhyUs />
      <Subscribe />
      <Footer />
    </>
  );
}

export default App;
