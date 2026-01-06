import { useState } from 'react';
import Header from './components/Header';
import HeroNew from './components/HeroNew';
import Products from './components/Products';
import About from './components/About';
import ToolsResources from './components/ToolsResources';
import Footer from './components/Footer';
import EmailSignupModal from './components/EmailSignupModal';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroNew onOpenModal={() => setIsModalOpen(true)} />
      <Products />
      <About />
      <ToolsResources />
      <Footer />
      <EmailSignupModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}

export default App;
