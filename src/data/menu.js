export const MENU_ITEMS = [
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

export const categories = ['All', 'Beverages', 'Breakfast', 'Main Course', 'Desserts'];
export const diets = ['All', 'Veg', 'Non-Veg', 'Vegan'];

export function getItemById(id) {
  return MENU_ITEMS.find((i) => i.id === Number(id));
}
