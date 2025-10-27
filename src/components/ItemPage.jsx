import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getItemById } from '../data/menu';

const ItemPage = () => {
  const { id } = useParams();
  const item = getItemById(id);

  useEffect(() => {
    document.title = item ? `Café Aroma — ${item.name}` : 'Item not found';
  }, [item]);

  if (!item) {
    return (
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-2xl font-bold text-amber-900 mb-2">Item not found</h2>
        <p className="text-amber-800/80">The item you are looking for does not exist.</p>
        <Link to="/catalogue" className="inline-block mt-6 px-4 py-2 rounded-md bg-amber-700 text-white hover:bg-amber-800">Back to Catalogue</Link>
      </div>
    );
  }

  const subject = encodeURIComponent(`Booking inquiry for ${item.name}`);
  const body = encodeURIComponent(`Hello Café Aroma,%0D%0A%0D%0AI'd like to book a table and enjoy the ${item.name}.%0D%0A%0D%0AName: %0D%0ADate & Time: %0D%0AGuests: %0D%0AContact: %0D%0A%0D%0A— Sent from item page`);
  const mailto = `mailto:padhiashish01@gmail.com?subject=${subject}&body=${body}`;

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="rounded-xl overflow-hidden shadow border">
          <img src={item.img} alt={item.name} className="w-full h-80 object-cover" />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-amber-900">{item.name}</h1>
          <p className="mt-2 text-amber-800/80">{item.desc}</p>
          <div className="mt-4 flex items-center gap-3">
            <span className="text-lg font-semibold text-amber-900">${item.price.toFixed(2)}</span>
            <span className="text-xs px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 border border-amber-200">{item.category}</span>
            <span className={`text-xs px-2 py-0.5 rounded-full border ${
              item.diet === 'Vegan' ? 'bg-emerald-100 text-emerald-800 border-emerald-200' :
              item.diet === 'Veg' ? 'bg-lime-100 text-lime-800 border-lime-200' :
              'bg-rose-100 text-rose-800 border-rose-200'
            }`}>{item.diet}</span>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <a href={mailto} className="px-4 py-2 rounded-md bg-amber-700 text-white hover:bg-amber-800">Book this item via Email</a>
            <Link to="/booking" className="px-4 py-2 rounded-md border border-amber-700 text-amber-800 hover:bg-amber-50">Go to Booking Form</Link>
            <Link to="/catalogue" className="px-4 py-2 rounded-md border border-amber-200 text-amber-800 hover:bg-amber-50">Back to Catalogue</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemPage;
