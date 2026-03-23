import { Link } from "react-router-dom";
import {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Mail,
  Phone,
  MapPin,
  Send,
} from "lucide-react";

const footerLinks = {
  "Quick Links": [
    { label: "Home", to: "/" },
    { label: "Our Store", to: "/products" },
    { label: "Laptops", to: "/products?category=laptops" },
    { label: "Smart Phones", to: "/products?category=smart-phones" },
    { label: "Headphones", to: "/products?category=headphones" },
    { label: "Smartwatches", to: "/products?category=smartwatches" },
  ],
  "Customer Service": [
    { label: "My Account", to: "/" },
    { label: "Track My Order", to: "/" },
    { label: "Returns & Exchanges", to: "/" },
    { label: "Shipping Policy", to: "/" },
    { label: "FAQ", to: "/" },
    { label: "Contact Us", to: "/" },
  ],
  Company: [
    { label: "About Us", to: "/" },
    { label: "Careers", to: "/" },
    { label: "Press", to: "/" },
    { label: "Blog", to: "/" },
    { label: "Privacy Policy", to: "/" },
    { label: "Terms of Service", to: "/" },
  ],
};

const socials = [
  { icon: Facebook, label: "Facebook", href: "#" },
  { icon: Twitter, label: "Twitter", href: "#" },
  { icon: Instagram, label: "Instagram", href: "#" },
  { icon: Youtube, label: "YouTube", href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 mt-16">
      {/* Newsletter banner */}
      <div className="bg-blue-600">
        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-display text-xl font-bold text-white">
              Subscribe to our Newsletter
            </h3>
            <p className="text-blue-100 text-sm mt-1">
              Get the latest deals and product updates straight to your inbox.
            </p>
          </div>
          <div className="flex w-full md:w-auto gap-2">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 md:w-72 px-4 py-2.5 rounded-xl text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="bg-gray-900 hover:bg-gray-800 text-white px-5 py-2.5 rounded-xl text-sm font-semibold flex items-center gap-2 transition-colors shrink-0">
              <Send className="w-4 h-4" />
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-2 space-y-5">
            {/* Logo */}
            <Link
              to="/"
              className="inline-flex items-center font-display font-bold text-xl text-white"
            >
              Appiness
              <span className="bg-blue-500 text-white px-1.5 py-0.5 rounded text-sm ml-0.5">
                Store
              </span>
            </Link>

            <p className="text-sm leading-relaxed max-w-xs">
              Your one-stop destination for the latest phones, laptops, and
              accessories. Quality products at unbeatable prices.
            </p>

            {/* Contact info */}
            <div className="space-y-2.5 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-blue-400 mt-0.5 shrink-0" />
                <span>Tanke, Ilorin</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-blue-400 shrink-0" />
                <span>+234 800 123 8***</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                <span>support@appiness.com</span>
              </div>
            </div>

            {/* Socials */}
            <div className="flex items-center gap-3 pt-1">
              {socials.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-xl bg-gray-800 hover:bg-blue-600 flex items-center justify-center transition-colors"
                >
                  <Icon className="w-4 h-4 text-gray-300" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-display font-semibold text-white text-sm mb-4">
                {title}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="text-sm hover:text-white hover:translate-x-1 transition-all inline-block"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <p>© {new Date().getFullYear()} Appiness. All rights reserved.</p>

          {/* Payment badges */}
          <div className="flex items-center gap-2">
            {["VISA", "Mastercard", "AMEX", "PayPal", "Apple Pay"].map((p) => (
              <span
                key={p}
                className="border border-gray-700 text-gray-500 px-2 py-0.5 rounded font-medium text-xs"
              >
                {p}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
