import React from 'react';
import { Coffee, Utensils, MapPin } from 'lucide-react';

const HeaderHero = () => {
  return (
    <header className="relative bg-gradient-to-b from-amber-50 to-white">
      <nav className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/60 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2 font-semibold text-amber-900">
            <Coffee className="w-6 h-6 text-amber-700" />
            <span>Café Aroma</span>
          </a>
          <div className="hidden md:flex items-center gap-6 text-sm">
            <a href="#catalogue" className="hover:text-amber-700">Catalogue</a>
            <a href="#about" className="hover:text-amber-700">About</a>
            <a href="#booking" className="px-3 py-2 rounded-md bg-amber-700 text-white hover:bg-amber-800">Book a Table</a>
          </div>
        </div>
      </nav>

      <section id="home" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-12 md:pt-20 md:pb-20 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-amber-900">
            Crafted Coffee, Cozy Vibes
          </h1>
          <p className="mt-4 text-amber-800/80 leading-relaxed">
            Welcome to Café Aroma — your neighborhood retreat for specialty brews, hearty breakfasts,
            and indulgent desserts. Slow down, sip up, and savor the moment.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#catalogue" className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-amber-700 text-white hover:bg-amber-800">
              <Utensils className="w-4 h-4" /> View Menu
            </a>
            <a href="#booking" className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-amber-700 text-amber-800 hover:bg-amber-50">
              Reserve a Table
            </a>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-4">
            <div className="p-4 rounded-lg bg-white shadow-sm border">
              <p className="text-sm font-semibold text-amber-900">Today’s Special</p>
              <p className="text-sm text-amber-700 mt-1">Hazelnut Mocha + Almond Croissant</p>
              <p className="text-xs text-amber-800/70 mt-1">Only today at a special price</p>
            </div>
            <div className="p-4 rounded-lg bg-white shadow-sm border">
              <p className="text-sm font-semibold text-amber-900">Opening Hours</p>
              <p className="text-sm text-amber-700 mt-1">Mon–Sun: 8:00 AM – 10:00 PM</p>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="rounded-2xl overflow-hidden shadow-xl border">
            <img
              src="https://images.unsplash.com/photo-1498654896293-37aacf113fd9?q=80&w=1600&auto=format&fit=crop"
              alt="Café ambiance"
              className="w-full h-[340px] md:h-[420px] object-cover"
              loading="eager"
            />
          </div>
          <div className="hidden md:flex items-center gap-2 p-3 rounded-full shadow-lg bg-white border absolute -bottom-5 -left-5">
            <MapPin className="w-4 h-4 text-amber-700" />
            <span className="text-sm">123 Brew Street, Coffee Town</span>
          </div>
        </div>
      </section>
    </header>
  );
};

export default HeaderHero;
