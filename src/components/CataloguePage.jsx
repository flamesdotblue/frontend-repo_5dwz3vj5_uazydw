import React, { useMemo, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MENU_ITEMS, categories, diets } from '../data/menu';

const CataloguePage = () => {
  const [cat, setCat] = useState('All');
  const [diet, setDiet] = useState('All');

  useEffect(() => {
    document.title = 'Café Aroma — Catalogue';
  }, []);

  const items = useMemo(() => {
    return MENU_ITEMS.filter((i) => (cat === 'All' || i.category === cat) && (diet === 'All' || i.diet === diet));
  }, [cat, diet]);

  return (
    <section className="py-10 bg-amber-50/50 min-h-[70vh]">
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
            <Link to={`/item/${item.id}`} key={item.id} className="bg-white rounded-xl overflow-hidden shadow-sm border hover:shadow-md transition">
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
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CataloguePage;
