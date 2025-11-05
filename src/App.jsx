import React from 'react';
import Hero from './components/Hero';
import FeatureGrid from './components/FeatureGrid';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen w-full bg-[#0b0b12]">
      <Hero />
      <FeatureGrid />
      <CTASection />
      <Footer />
    </div>
  );
}

export default App;
