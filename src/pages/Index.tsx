
import React from 'react';
import ConfettiAnimation from '../components/ConfettiAnimation';
import HeroSection from '../components/HeroSection';
import PhotoGallery from '../components/PhotoGallery';
// import intro from '../src/images/intro.jpg';
// import TimelineSection from '../components/TimelineSection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <ConfettiAnimation />
      <HeroSection />
      <PhotoGallery />
      {/* <TimelineSection /> */}
      <Footer />
    </div>
  );
};

export default Index;
