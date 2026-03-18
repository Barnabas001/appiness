import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const slides = [
  {
    tag: "Galaxy S25 Ultra",
    headline: "Supercharged for pros.",
    price: "#3,333,460.00",
    monthly: "$41.62/mo",
    image:
      "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s25-ultra-sm-s938.jpg",
    bg: "from-slate-100 to-blue-50",
  },
  {
    tag: "Apple M5 Pro",
    headline: "Performance redefined.",
    price: "#2,890,999.00",
    // monthly: "$69.40/mo",
    image:
      "https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc4/apple_m5_m5pro_m5max_m5ultra.jpg",
    bg: "from-slate-50 to-green-50",
  },
];

export default function LandingPageBanner() {
  const [current, setCurrent] = useState(0);
  const slide = slides[current];

  return (
    <section className={`bg-linear-to-r ${slide.bg} relative overflow-hidden`}>
      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center gap-8 min-h-80">
        <div className="flex-1 space-y-4">
          <h1 className="front-display text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            {slide.tag}
          </h1>
          <p className="text-gray-600 text-lg">{slide.headline}</p>
          <p className="text-2xl font-semibold text-gray-900">{slide.price}</p>
          <p className="text-sm text-gray-500">
            From {slide.price} or {slide.monthly} per month
          </p>
          <div className="flex gap-3 pt-2">
            {/* <Link
              to="/products"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-full text-sm font-medium transition-colors"
            >
              Buy Now
            </Link> */}
            <button className="border border-gray-400 text-gray-700 px-6 py-2.5 rounded-full text-sm font-medium hover:bg-white transition-colors">
              Learn More
            </button>
          </div>
        </div>

        <div className="flex-1 flex justify-center">
          <img
            src={slide.image}
            alt={slide.tag}
            className="max-h-64 object-contain drop-shadow-xl"
          />
        </div>
      </div>

      {/* Prev/Next */}
      <button
        onClick={() =>
          setCurrent((c) => (c - 1 + slides.length) % slides.length)
        }
        className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-1.5 rounded-full shadow"
      >
        <ChevronLeft className="w-4 h-4" />
      </button>
      <button
        onClick={() => setCurrent((c) => (c + 1) % slides.length)}
        className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-1.5 rounded-full shadow"
      >
        <ChevronRight className="w-4 h-4" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2.5 h-2.5 rounded-full transition-colors ${i === current ? "bg-blue-600" : "bg-gray-300"}`}
          />
        ))}
      </div>
    </section>
  );
}
