import { Link } from "react-router-dom";

const promos = [
  {
    badge: "BIG SAVING",
    title: "Iphone 17 Pro max",
    subtitle: "Giveaway Price",
    price: "#2,000,000.00",
    action: "Buy Now",
    bg: "bg-blue-50",
    image: "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-17-pro-max.jpg",
  },
  {
    badge: "15% OFF",
    title: "Samsung Galaxy Watch 7",
    subtitle: "Light On Price.",
    price: "320,000.00",
    action: "Learn More",
    bg: "bg-pink-50",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1iUKkwYOYcKqMd9RXxkqowEWoxn-rvXKqeoh-FO81-A&s&ec=121585071",
  },
  {
    badge: "BEST PRICE",
    title: "AirPods 4.",
    subtitle: "",
    price: "#200,000.00",
    action: "Learn More",
    bg: "bg-gray-50",
    image:
      "https://www.apple.com/v/airpods-4/g/images/overview/bento-gallery/bento_case_open__63kccmu775u6_small.jpg",
  },
  {
    badge: "FLAT 25% OFF",
    title: "Airpods Max. Best Sound Quality",
    subtitle: "",
    price: "#500,000.00",
    action: "Buy Now",
    bg: "bg-blue-50",
    image:
      "https://www.istore.com.ng/cdn/shop/products/amg_1_1200x.jpg?v=1616762774",
  },
  {
    badge: "NEWLY ADDED",
    title: "Mac Book Pro m5. New Arrival",
    subtitle: "",
    price: "#3,000,000.00",
    action: "Learn More",
    bg: "bg-purple-50",
    image:
      "https://www.cultofmac.com/wp-content/uploads/2025/10/unboxing-M5-MacBook-Pro.jpg",
  },
];

export default function PromoCards() {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {promos.map((promo) => (
          <div
            key={promo.title}
            className={`${promo.bg} rounded-2xl p-5 flex justify-between items-center overflow-hidden relative min-h-35`}
          >
            <div className="space-y-1 z-10">
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                {promo.badge}
              </p>
              <h3 className="font-display font-semibold text-gray-900 text-base leading-snug max-w-40">
                {promo.title}
              </h3>
              {promo.subtitle && (
                <p className="text-sm text-gray-600">{promo.subtitle}</p>
              )}
              <p className="text-sm font-medium text-gray-800">
                From {promo.price}
              </p>
              <Link
                to="/products"
                className="inline-block mt-2 text-xs font-semibold text-blue-600 border border-blue-400 px-3 py-1 rounded-full hover:bg-blue-600 hover:text-white transition-colors"
              >
                {promo.action}
              </Link>
            </div>
            <img
              src={promo.image}
              alt={promo.title}
              className="h-24 object-contain opacity-80"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
