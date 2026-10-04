import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhyBrandSip from './components/WhyBrandSip';
import HowItWorks from './components/HowItWorks';
import Solutions from './components/Solutions';
import BottleOptions from './components/BottleOptions';
import QuoteCalculator from './components/QuoteCalculator';
import BottleCustomizer from './components/BottleCustomizer';
import BulkOrder from './components/BulkOrder';
import QuoteForm from './components/QuoteForm';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import type { DesignState } from './types/design';

function App() {
  const [designState, setDesignState] = useState<DesignState>({
    orientation: 'vertical',
    logo: null,
    brandName: 'Your Brand',
    scale: 1,
    positionX: 0,
    positionY: 0
  });

  return (
    <div className="min-h-screen font-sans bg-brand-light">
      <Navbar />
      <main>
        <Hero />
        <WhyBrandSip />
        <HowItWorks />
        <Solutions />
        <BottleOptions />
        <QuoteCalculator />
        <BottleCustomizer designState={designState} setDesignState={setDesignState} />
        <BulkOrder />
        <QuoteForm designState={designState} />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
