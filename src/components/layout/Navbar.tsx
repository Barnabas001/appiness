export default function Navbar() {
  return (
    <header className="bg-gray-900 text-white sticky top-0 z-50">
      <div className="text-xs bg-gray-800 text-gray-400 flex justify-between px-6 py-1.5">
        <span>Free Shipping On All Orders Over 500,000</span>
        <div className="flex gap-4">
          <span className="cursor-pointer hover:text-white">My Account</span>
          <span className="cursor-pointer hover:text-white">Compare</span>
        </div>
      </div>
    </header>
  );
}
