import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import Working from './components/Working';
import WhyBuild from './components/WhyBuild';
import Resources from './components/Resources';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <About />
      <Products />
      <Working />
      <WhyBuild />
      <Resources />
      <Footer />
    </div>
  );
}

export default App;
