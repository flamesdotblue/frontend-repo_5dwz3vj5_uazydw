import React from 'react';
import { Mail, Phone, Instagram, Facebook, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-amber-900 text-amber-50">
      <div id="about" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-xl font-semibold">Our Story</h3>
          <p className="mt-3 text-amber-100/90">
            Café Aroma is a cozy neighborhood café inspired by the love of craft coffee and wholesome food.
            We believe in warm smiles, fresh ingredients, and creating a space where conversations linger.
          </p>
          <div className="mt-4">
            <p className="text-sm">Open daily • 8:00 AM – 10:00 PM</p>
          </div>
        </div>

        <div className="grid gap-4">
          <div className="w-full h-48 rounded-lg overflow-hidden border border-amber-800">
            <iframe
              title="Café location"
              src="https://www.google.com/maps?q=New+York&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <p className="flex items-center gap-2"><MapPin className="w-4 h-4" /> 123 Brew Street, Coffee Town</p>
              <a href="tel:+1234567890" className="flex items-center gap-2 hover:underline"><Phone className="w-4 h-4" /> +1 (234) 567-890</a>
              <a href="mailto:padhiashish01@gmail.com" className="flex items-center gap-2 hover:underline"><Mail className="w-4 h-4" /> padhiashish01@gmail.com</a>
            </div>
            <div className="flex items-center gap-4">
              <a href="#" aria-label="Instagram" className="p-2 rounded-full bg-amber-800 hover:bg-amber-700"><Instagram className="w-4 h-4" /></a>
              <a href="#" aria-label="Facebook" className="p-2 rounded-full bg-amber-800 hover:bg-amber-700"><Facebook className="w-4 h-4" /></a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-amber-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between text-sm">
          <p>© {new Date().getFullYear()} Café Aroma. All rights reserved.</p>
          <a href="#home" className="hover:underline">Back to top</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
