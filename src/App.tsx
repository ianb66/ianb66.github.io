import Header from './components/Header';
import HeroNew from './components/HeroNew';
import Products from './components/Products';
import About from './components/About';
import ToolsResources from './components/ToolsResources';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroNew />
      <Products />
      <About />
      <ToolsResources />
      <Footer />
    </div>
  );
}

export default App;
