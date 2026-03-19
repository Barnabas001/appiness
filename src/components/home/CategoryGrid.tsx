import { Link } from "react-router-dom";
const categories = [
  { name: "SmartTV", count: 9, emoji: "📺" },
  { name: "Speaker", count: 3, emoji: "🔊" },
  { name: "Tablets", count: 4, emoji: "📱" },
  { name: "Airpods", count: 2, emoji: "🎧" },
  { name: "Smartwatches", count: 10, emoji: "⌚" },
  { name: "Smart Phones", count: 9, emoji: "📲" },
  { name: "Headphones", count: 2, emoji: "🎵" },
  { name: "Laptops", count: 6, emoji: "💻" },
  { name: "Bluetooth", count: 5, emoji: "📡" },
];

export default function CategoryGrid() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      <h2 className="font-display text-2xl font-semibold text-gray-900 mb-6">
        Our Top Categories
      </h2>
      <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-9 gap-3">
        {categories.map((cat) => (
          <Link
            key={cat.name}
            to={`/products?category=${cat.name.toLowerCase().replace(" ", "-")}`}
            className="flex flex-col items-center gap-2 p-3 border border-gray-200 rounded-xl hover:border-blue-400 hover:shadow-sm transition-all group bg-white"
          >
            <div className="text-3xl">{cat.emoji}</div>
            <span className="text-xs font-medium text-gray-700 group-hover:text-blue-600 text-center leading-tight">
              {cat.name}
            </span>
            <span className="text-xs text-gray-400">{cat.count} items</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
