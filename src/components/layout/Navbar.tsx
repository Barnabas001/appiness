import { useState } from "react";
import { Search, ShoppingCart, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useCartStore } from "../../store/cartStore";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const cartCount = useCartStore((s) => s.totalItems());
  return (
    <header className="bg-gray-900 text-white sticky top-0 z-50">
      <div className="text-xs bg-gray-800 text-gray-400 flex justify-between px-6 py-1.5">
        <span>Free Shipping On All Orders Over 500,000</span>
        <div className="flex gap-4">
          <span className="cursor-pointer hover:text-white">My Account</span>
          <span className="cursor-pointer hover:text-white">Compare</span>
        </div>
      </div>

      {/* Main nav */}
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center gap-8">
        {/* Logo */}
        <Link to="/" className="font-display font-bold text-xl">
          Quick
          <span className="bg-blue-500 text-white px-1.5 py-0.5 rounded text-sm ml-0.5">
            Store
          </span>
        </Link>

        {/* Nav links — hidden on mobile */}
        <nav className="hidden md:flex items-center gap-6 text-sm text-gray-300">
          <Link to="/" className="hover:text-white">
            Home
          </Link>
          <Link to="/products" className="hover:text-white">
            Our Store
          </Link>
          <Link to="/products?category=speaker" className="hover:text-white">
            Speaker
          </Link>
          <Link to="/blog" className="hover:text-white">
            Blogs
          </Link>
          <Link to="/products?category=laptop" className="hover:text-white">
            Laptops
          </Link>
        </nav>

        {/* Search */}
        <div className="flex-1 hidden md:flex">
          <div className="relative w-full max-w-md">
            <input
              type="text"
              placeholder="Search Product Here..."
              className="w-full bg-white text-gray-800 rounded-full px-4 py-2 text-sm pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Search className="absolute right-3 top-2.5 text-gray-400 w-4 h-4" />
          </div>
        </div>

        {/* Cart */}
        <Link to="/cart" className="relative ml-auto md:ml-0">
          <ShoppingCart className="w-6 h-6" />
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
              {cartCount}
            </span>
          )}
        </Link>

        {/* Mobile menu toggle */}
        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-gray-800 px-6 pb-4 flex flex-col gap-3 text-sm text-gray-300">
          <Link to="/" onClick={() => setMenuOpen(false)}>
            Home
          </Link>
          <Link to="/products" onClick={() => setMenuOpen(false)}>
            Our Store
          </Link>
          <Link
            to="/products?category=laptop"
            onClick={() => setMenuOpen(false)}
          >
            Laptops
          </Link>
        </div>
      )}
    </header>
  );
}
