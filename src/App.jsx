import React, { useEffect } from 'react';
import HeaderHero from './components/HeaderHero';
import Catalogue from './components/Catalogue';
import BookingForm from './components/BookingForm';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    document.title = 'Café Aroma — Crafted Coffee, Cozy Vibes';
  }, []);

  return (
    <div className="min-h-screen bg-white text-amber-900">
      <HeaderHero />
      <Catalogue />
      <BookingForm />
      <Footer />
    </div>
  );
}

export default App;
