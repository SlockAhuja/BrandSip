import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BusinessStats from './components/BusinessStats';
import Solutions from './components/Solutions';
import HowItWorks from './components/HowItWorks';
import LiveCustomizerPromotion from './components/LiveCustomizerPromotion';
import WhyBrandSip from './components/WhyBrandSip';
import UseCases from './components/UseCases';
import BeforeAfter from './components/BeforeAfter';
import TrustSection from './components/TrustSection';
import BottleOptions from './components/BottleOptions';
import QuoteCalculator from './components/QuoteCalculator';
import BottleCustomizer from './components/BottleCustomizer';
import QuoteForm from './components/QuoteForm';
import CtaSection from './components/CtaSection';
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
    <div className="min-h-screen font-sans bg-white selection:bg-brand-aqua/30 selection:text-brand-navy">
      <Navbar />
      <main>
        <Hero />
        <BusinessStats />
        <Solutions />
        <HowItWorks />
        <LiveCustomizerPromotion />
        <WhyBrandSip />
        <UseCases />
        <BeforeAfter />
        <TrustSection />
        <BottleOptions />
        <QuoteCalculator />
        <BottleCustomizer designState={designState} setDesignState={setDesignState} />
        <QuoteForm designState={designState} />
        <CtaSection />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
