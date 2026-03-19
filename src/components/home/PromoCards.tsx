import { Link } from "react-router-dom";

const promos = [
  {
    badge: "BIG SAVING",
    title: "Iphone 17 Pro max",
    subtitle: "Giveaway Price",
    price: "#2,000,000.00",
    action: "Buy Now",
    bg: "bg-blue-50",
    imgBg: "#dbeafe",
    imgText: "Iphone17",
  },
  {
    badge: "15% OFF",
    title: "Smartwatch 7",
    subtitle: "Light On Price.",
    price: "400,000.00",
    action: "Learn More",
    bg: "bg-pink-50",
    imgBg: "#fce7f3",
    imgText: "Smartwatch",
  },
  {
    badge: "BEST PRICE",
    title: "5th Generation AirPods.",
    subtitle: "",
    price: "#250,000.00",
    action: "Learn More",
    bg: "bg-gray-50",
    imgBg: "#f3f4f6",
    imgText: "AirPods",
  },
  {
    badge: "FLAT 25% OFF",
    title: "Headset Max 3rd Generation.",
    subtitle: "",
    price: "$549.00",
    action: "Buy Now",
    bg: "bg-blue-50",
    imgBg: "#dbeafe",
    imgText: "Headset",
  },
  {
    badge: "NEWLY ADDED",
    title: "Mac Book Pro. New Arrival",
    subtitle: "",
    price: "#3,000,000.00",
    action: "Learn More",
    bg: "bg-purple-50",
    imgBg: "#ede9fe",
    imgText: "MacBook",
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
              src={`https://placehold.co/120x100/${promo.imgBg.replace("#", "")}/${promo.imgBg.replace("#", "")}?text=${promo.imgText}`}
              alt={promo.title}
              className="h-24 object-contain opacity-80"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
