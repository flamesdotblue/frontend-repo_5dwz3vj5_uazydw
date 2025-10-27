import React, { useMemo, useState } from 'react';

const MENU_ITEMS = [
  {
    id: 1,
    name: 'Espresso',
    price: 3.5,
    category: 'Beverages',
    diet: 'Vegan',
    img: 'https://images.unsplash.com/photo-1512568400610-62da28bc8a13?q=80&w=1200&auto=format&fit=crop',
    desc: 'Rich, bold single-shot espresso.',
  },
  {
    id: 2,
    name: 'Cappuccino',
    price: 4.5,
    category: 'Beverages',
    diet: 'Veg',
    img: 'https://images.unsplash.com/photo-1503481766315-7a586b20f66d?q=80&w=1200&auto=format&fit=crop',
    desc: 'Velvety foam with a balanced espresso base.',
  },
  {
    id: 3,
    name: 'Avocado Toast',
    price: 7.9,
    category: 'Breakfast',
    diet: 'Vegan',
    img: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?q=80&w=1200&auto=format&fit=crop',
    desc: 'Sourdough, smashed avo, chili flakes, microgreens.',
  },
  {
    id: 4,
    name: 'Pancake Stack',
    price: 8.5,
    category: 'Breakfast',
    diet: 'Veg',
    img: 'https://images.unsplash.com/photo-1495214783159-3503fd1b572d?q=80&w=1200&auto=format&fit=crop',
    desc: 'Fluffy pancakes with maple and berries.',
  },
  {
    id: 5,
    name: 'Grilled Chicken Panini',
    price: 9.9,
    category: 'Main Course',
    diet: 'Non-Veg',
    img: 'https://images.unsplash.com/photo-1604908554027-5624c3c879a6?q=80&w=1200&auto=format&fit=crop',
    desc: 'Herb chicken, mozzarella, tomato, basil pesto.',
  },
  {
    id: 6,
    name: 'Mushroom Risotto',
    price: 11.5,
    category: 'Main Course',
    diet: 'Veg',
    img: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop',
    desc: 'Creamy arborio rice with porcini and parmesan.',
  },
  {
    id: 7,
    name: 'Chocolate Lava Cake',
    price: 6.5,
    category: 'Desserts',
    diet: 'Veg',
    img: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=1200&auto=format&fit=crop',
    desc: 'Warm molten center, vanilla ice cream.',
  },
  {
    id: 8,
    name: 'Berry Smoothie',
    price: 5.9,
    category: 'Beverages',
    diet: 'Vegan',
    img: 'https://images.unsplash.com/photo-1546177461-79dfec0b0924?q=80&w=1200&auto=format&fit=crop',
    desc: 'Mixed berries, banana, oat milk.',
  },
];

const categories = ['All', 'Beverages', 'Breakfast', 'Main Course', 'Desserts'];
const diets = ['All', 'Veg', 'Non-Veg', 'Vegan'];

const Catalogue = () => {
  const [cat, setCat] = useState('All');
  const [diet, setDiet] = useState('All');
  const items = useMemo(() => {
    return MENU_ITEMS.filter((i) => (cat === 'All' || i.category === cat) && (diet === 'All' || i.diet === diet));
  }, [cat, diet]);

  return (
    <section id="catalogue" className="py-14 bg-amber-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between flex-wrap gap-4">
          <div>
            <h2 className="text-3xl font-bold text-amber-900">Our Catalogue</h2>
            <p className="text-amber-800/80 mt-1">Browse by category and dietary preference</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setCat(c)}
                className={`px-3 py-1.5 rounded-full text-sm border ${cat === c ? 'bg-amber-700 text-white border-amber-700' : 'bg-white text-amber-800 hover:bg-amber-100 border-amber-200'}`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {diets.map((d) => (
            <button
              key={d}
              onClick={() => setDiet(d)}
              className={`px-3 py-1.5 rounded-full text-sm border ${diet === d ? 'bg-emerald-600 text-white border-emerald-600' : 'bg-white text-emerald-800 hover:bg-emerald-50 border-emerald-200'}`}
            >
              {d}
            </button>
          ))}
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <div key={item.id} className="bg-white rounded-xl overflow-hidden shadow-sm border hover:shadow-md transition">
              <img src={item.img} alt={item.name} className="h-44 w-full object-cover" loading="lazy" />
              <div className="p-4">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="font-semibold text-amber-900">{item.name}</h3>
                    <p className="text-sm text-amber-800/80">{item.desc}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-amber-900">${item.price.toFixed(2)}</p>
                    <span className="inline-block mt-1 text-xs px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 border border-amber-200">{item.category}</span>
                  </div>
                </div>
                <div className="mt-3">
                  <span className={`text-xs px-2 py-0.5 rounded-full border ${
                      item.diet === 'Vegan' ? 'bg-emerald-100 text-emerald-800 border-emerald-200' :
                      item.diet === 'Veg' ? 'bg-lime-100 text-lime-800 border-lime-200' :
                      'bg-rose-100 text-rose-800 border-rose-200'
                    }`}>{item.diet}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Catalogue;
