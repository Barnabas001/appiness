import { ShoppingCart, Star } from "lucide-react";
import { Link } from "react-router-dom";
import type { Product } from "../../types";
import { useCartStore } from "../../store/cartStore";

interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {
  const addToCart = useCartStore((s) => s.addToCart);

  const badgeColors = {
    NEW: "bg-green-500",
    SALE: "bg-red-500",
    HOT: "bg-orange-500",
  };

  return (
    <div>
      <Link to={`/products/${product.id}`}>
        <div>
          <img src={product.image} alt={product.name} />
        </div>

        {/* Badge */}
        {product.badge && (
          <span
            className={`absolute top-3 left-3 ${badgeColors[product.badge]} text-white text-xs font-semibold px-2 py-0.5 rounded-full`}
          >
            {product.badge}
          </span>
        )}

        {/*Discount*/}
        {product.discount && <span>-{product.discount}</span>}
      </Link>

      {/* Info */}
      <div>
        <Link to={`/products/${product.id}`}>
          <h3>{product.name}</h3>
        </Link>

        {/* Rating */}
        {product.rating && (
          <div>
            <Star />
            <span>{product.rating}</span>
            <span>{product.reviews}</span>
          </div>
        )}

        {/* Price */}
        <div>
          <span>${product.price.toLocaleString()}</span>
          {product.originalPrice && (
            <span>#{product.originalPrice.toLocaleString()}</span>
          )}
        </div>

        {/* Add to cart */}
        <button
          onClick={() => addToCart(product)}
          className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-2 rounded-xl transition-colors"
        >
          <ShoppingCart className="w-4 h-4" />
          Add to Cart
        </button>
      </div>
    </div>
  );
}
