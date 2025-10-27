import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Coffee } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/60 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-semibold text-amber-900">
          <Coffee className="w-6 h-6 text-amber-700" />
          <span>Café Aroma</span>
        </Link>
        <div className="hidden md:flex items-center gap-6 text-sm">
          <NavLink to="/catalogue" className={({isActive}) => isActive ? 'text-amber-700 font-medium' : 'hover:text-amber-700'}>Catalogue</NavLink>
          <NavLink to="/booking" className={({isActive}) => (isActive ? 'bg-amber-800 text-white' : 'bg-amber-700 text-white hover:bg-amber-800') + ' px-3 py-2 rounded-md'}>Book a Table</NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
