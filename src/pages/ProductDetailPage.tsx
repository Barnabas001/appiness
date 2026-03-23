import { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import {
  ShoppingCart,
  ArrowLeft,
  Star,
  Minus,
  Plus,
  Check,
} from "lucide-react";
import { products } from "../data/products";
import { useCartStore } from "../store/cartStore";
import ProductCard from "../components/shared/ProductCard";

export default function ProductDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const addToCart = useCartStore((s) => s.addToCart);

  const product = products.find((p) => p.id === id);
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  // Related products — same category, exclude current
  const related = products
    .filter((p) => p.category === product?.category && p.id !== id)
    .slice(0, 5);

  if (!product) {
    return (
      <main className="max-w-7xl mx-auto px-6 py-24 text-center">
        <p className="text-gray-500 text-lg">Product not found.</p>
        <Link
          to="/products"
          className="mt-4 inline-block text-blue-600 hover:underline text-sm"
        >
          ← Back to store
        </Link>
      </main>
    );
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <main className="max-w-7xl mx-auto px-6 py-10">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-gray-500 mb-8">
        <Link to="/" className="hover:text-blue-600">
          Home
        </Link>
        <span>/</span>
        <Link to="/products" className="hover:text-blue-600">
          Store
        </Link>
        <span>/</span>
        <Link
          to={`/products?category=${product.category}`}
          className="hover:text-blue-600 capitalize"
        >
          {product.category.replace("-", " ")}
        </Link>
        <span>/</span>
        <span className="text-gray-900 font-medium truncate max-w-50">
          {product.name}
        </span>
      </div>

      {/* Back button */}
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-blue-600 mb-6 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        Back
      </button>

      {/* Main product section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        {/* Image */}
        <div className="bg-gray-50 rounded-2xl flex items-center justify-center p-10 min-h-90">
          <img
            src={product.image}
            alt={product.name}
            className="max-h-72 object-contain"
            onError={(e) => {
              e.currentTarget.src =
                "https://placehold.co/300x300?text=No+Image";
            }}
          />
        </div>

        {/* Details */}
        <div className="space-y-5">
          {/* Badge */}
          {product.badge && (
            <span
              className={`inline-block text-xs font-semibold px-3 py-1 rounded-full ${
                product.badge === "NEW"
                  ? "bg-green-100 text-green-700"
                  : product.badge === "SALE"
                    ? "bg-red-100 text-red-600"
                    : "bg-orange-100 text-orange-600"
              }`}
            >
              {product.badge}
            </span>
          )}

          {/* Name */}
          <h1 className="font-display text-3xl font-bold text-gray-900 leading-tight">
            {product.name}
          </h1>

          {/* Rating */}
          {product.rating && (
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.floor(product.rating!)
                        ? "fill-yellow-400 text-yellow-400"
                        : "text-gray-200 fill-gray-200"
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-gray-600">{product.rating}</span>
              <span className="text-sm text-gray-400">
                ({product.reviews} reviews)
              </span>
            </div>
          )}

          {/* Price */}
          <div className="flex items-baseline gap-3">
            <span className="font-display text-3xl font-bold text-gray-900">
              ${product.price.toLocaleString()}
            </span>
            {product.originalPrice && (
              <span className="text-lg text-gray-400 line-through">
                #{product.originalPrice.toLocaleString()}
              </span>
            )}
            {product.discount && (
              <span className="text-sm font-semibold text-red-500">
                Save {product.discount}%
              </span>
            )}
          </div>

          {/* Description */}
          {product.description && (
            <p className="text-gray-600 leading-relaxed">
              {product.description}
            </p>
          )}

          <hr className="border-gray-100" />

          {/* Quantity selector */}
          <div className="flex items-center gap-4">
            <span className="text-sm font-medium text-gray-700">Quantity</span>
            <div className="flex items-center border border-gray-200 rounded-xl overflow-hidden">
              <button
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                className="px-3 py-2 hover:bg-gray-100 transition-colors"
              >
                <Minus className="w-4 h-4 text-gray-600" />
              </button>
              <span className="px-5 py-2 text-sm font-semibold border-x border-gray-200 min-w-12 text-center">
                {quantity}
              </span>
              <button
                onClick={() => setQuantity((q) => q + 1)}
                className="px-3 py-2 hover:bg-gray-100 transition-colors"
              >
                <Plus className="w-4 h-4 text-gray-600" />
              </button>
            </div>
          </div>

          {/* Add to cart button */}
          <div className="flex gap-3 pt-2">
            <button
              onClick={handleAddToCart}
              className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-sm transition-all ${
                added
                  ? "bg-green-500 text-white"
                  : "bg-blue-600 hover:bg-blue-700 text-white"
              }`}
            >
              {added ? (
                <>
                  <Check className="w-4 h-4" />
                  Added to Cart!
                </>
              ) : (
                <>
                  <ShoppingCart className="w-4 h-4" />
                  Add to Cart
                </>
              )}
            </button>

            <Link
              to="/cart"
              className="px-6 py-3 rounded-xl border border-gray-200 text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
            >
              View Cart
            </Link>
          </div>

          {/* Extra info */}
          <div className="grid grid-cols-2 gap-3 pt-2">
            {[
              { label: "Free Shipping", sub: "On orders over #1000000" },
              { label: "Easy Returns", sub: "30-day return policy" },
              { label: "Warranty", sub: "1 year manufacturer" },
              { label: "Secure Payment", sub: "SSL encrypted checkout" },
            ].map((item) => (
              <div key={item.label} className="bg-gray-50 rounded-xl p-3">
                <p className="text-xs font-semibold text-gray-800">
                  {item.label}
                </p>
                <p className="text-xs text-gray-500 mt-0.5">{item.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Related Products */}
      {related.length > 0 && (
        <section>
          <h2 className="font-display text-2xl font-bold text-gray-900 mb-6">
            Related Products
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
