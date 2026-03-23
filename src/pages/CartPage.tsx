import { Link } from "react-router-dom";
import { Minus, Plus, Trash2, ShoppingBag, ArrowLeft } from "lucide-react";
import { useCartStore } from "../store/cartStore";

export default function CartPage() {
  const {
    items,
    removeFromCart,
    updateQuantity,
    totalItems,
    totalPrice,
    clearCart,
  } = useCartStore();

  if (items.length === 0) {
    return (
      <main className="max-w-7xl mx-auto px-6 py-24 text-center">
        <div className="flex flex-col items-center gap-4">
          <ShoppingBag className="w-16 h-16 text-gray-200" />
          <h2 className="font-display text-2xl font-bold text-gray-900">
            Your cart is empty
          </h2>
          <p className="text-gray-500 text-sm">
            Looks like you haven't added anything yet.
          </p>
          <Link
            to="/products"
            className="mt-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-xl text-sm font-semibold transition-colors"
          >
            Browse Products
          </Link>
        </div>
      </main>
    );
  }

  const shipping = totalPrice() >= 100 ? 0 : 9.99;
  const tax = totalPrice() * 0.075;
  const orderTotal = totalPrice() + shipping + tax;

  return (
    <main className="max-w-7xl mx-auto px-6 py-10">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="font-display text-3xl font-bold text-gray-900">
            Shopping Cart
          </h1>
          <p className="text-gray-500 text-sm mt-1">
            {totalItems()} {totalItems() === 1 ? "item" : "items"} in your cart
          </p>
        </div>
        <button
          onClick={clearCart}
          className="text-sm text-red-500 hover:text-red-600 font-medium transition-colors"
        >
          Clear Cart
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-4">
          {/* Back to store */}
          <Link
            to="/products"
            className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-blue-600 transition-colors mb-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Continue Shopping
          </Link>

          {/* Items list */}
          {items.map(({ product, quantity }) => (
            <div
              key={product.id}
              className="bg-white border border-gray-100 rounded-2xl p-4 flex gap-4 items-center hover:shadow-sm transition-shadow"
            >
              {/* Image */}
              <Link to={`/products/${product.id}`}>
                <div className="bg-gray-50 rounded-xl w-24 h-24 flex items-center justify-center shrink-0">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-20 object-contain"
                    onError={(e) => {
                      e.currentTarget.src =
                        "https://placehold.co/80x80?text=No+Image";
                    }}
                  />
                </div>
              </Link>

              {/* Info */}
              <div className="flex-1 min-w-0">
                <Link to={`/products/${product.id}`}>
                  <h3 className="font-medium text-gray-900 text-sm leading-snug hover:text-blue-600 transition-colors line-clamp-2">
                    {product.name}
                  </h3>
                </Link>
                <p className="text-xs text-gray-400 mt-0.5 capitalize">
                  {product.category.replace("-", " ")}
                </p>

                {/* Mobile price */}
                <p className="text-sm font-semibold text-gray-900 mt-1 md:hidden">
                  #{(product.price * quantity).toLocaleString()}
                </p>

                {/* Quantity controls */}
                <div className="flex items-center gap-3 mt-3">
                  <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden">
                    <button
                      onClick={() => updateQuantity(product.id, quantity - 1)}
                      className="px-2.5 py-1.5 hover:bg-gray-100 transition-colors"
                    >
                      <Minus className="w-3 h-3 text-gray-600" />
                    </button>
                    <span className="px-3 py-1.5 text-sm font-semibold border-x border-gray-200 min-w-9 text-center">
                      {quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(product.id, quantity + 1)}
                      className="px-2.5 py-1.5 hover:bg-gray-100 transition-colors"
                    >
                      <Plus className="w-3 h-3 text-gray-600" />
                    </button>
                  </div>

                  <button
                    onClick={() => removeFromCart(product.id)}
                    className="text-gray-400 hover:text-red-500 transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Desktop price */}
              <div className="hidden md:flex flex-col items-end gap-1 shrink-0">
                <p className="font-semibold text-gray-900">
                  #{(product.price * quantity).toLocaleString()}
                </p>
                {quantity > 1 && (
                  <p className="text-xs text-gray-400">
                    #{product.price.toLocaleString()} each
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="bg-white border border-gray-100 rounded-2xl p-6 sticky top-24 space-y-4">
            <h2 className="font-display text-lg font-bold text-gray-900">
              Order Summary
            </h2>

            <div className="space-y-3 text-sm">
              <div className="flex justify-between text-gray-600">
                <span>Subtotal ({totalItems()} items)</span>
                <span>#{totalPrice().toLocaleString()}</span>
              </div>

              <div className="flex justify-between text-gray-600">
                <span>Shipping</span>
                {shipping === 0 ? (
                  <span className="text-green-600 font-medium">Free</span>
                ) : (
                  <span>#{shipping.toFixed(2)}</span>
                )}
              </div>

              {shipping > 0 && (
                <p className="text-xs text-blue-600 bg-blue-50 rounded-lg px-3 py-2">
                  Add #{(100 - totalPrice()).toFixed(2)} more for free shipping!
                </p>
              )}

              <div className="flex justify-between text-gray-600">
                <span>Tax (7.5%)</span>
                <span>#{tax.toFixed(2)}</span>
              </div>

              <hr className="border-gray-100" />

              <div className="flex justify-between text-gray-900 font-bold text-base">
                <span>Total</span>
                <span>#{orderTotal.toFixed(2)}</span>
              </div>
            </div>

            {/* Promo code */}
            <div className="flex gap-2 pt-1">
              <input
                type="text"
                placeholder="Promo code"
                className="flex-1 text-sm border border-gray-200 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="text-sm font-semibold text-blue-600 border border-blue-200 px-4 py-2 rounded-xl hover:bg-blue-50 transition-colors">
                Apply
              </button>
            </div>

            {/* Checkout button */}
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl transition-colors text-sm">
              Proceed to Checkout
            </button>

            {/* Payment icons */}
            <div className="flex items-center justify-center gap-2 pt-1">
              {["VISA", "MC", "AMEX", "PayPal", "Mastercard"].map((p) => (
                <span
                  key={p}
                  className="text-xs text-gray-400 border border-gray-200 px-2 py-0.5 rounded font-medium"
                >
                  {p}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
