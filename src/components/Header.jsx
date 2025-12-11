import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="flex items-center justify-between py-6 px-6 bg-white shadow-sm sticky top-0 z-50">
      {/* Left logo and title */}
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-red-500 rounded-lg flex items-center justify-center text-white font-bold text-lg">
          DS
        </div>
        <div>
          <h1 className="text-xl font-semibold text-gray-900">NRI buddy</h1>
          <p className="text-sm text-gray-500">Community · Local Services</p>
        </div>
      </div>

      {/* Navigation */}
      <nav>
        <ul className="flex gap-8 text-sm font-medium items-center">
          <li>
            <Link
              to="/"
              className="text-gray-800 hover:text-orange-600 transition-colors"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/services"
              className="text-gray-800 hover:text-orange-600 transition-colors"
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="text-gray-800 hover:text-orange-600 transition-colors"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="text-gray-800 hover:text-orange-600 transition-colors"
            >
              Contact
            </Link>
          </li>

          <li>
            <Link
              to="/get-started"
              className="ml-6 px-5 py-2 rounded-md bg-orange-500 hover:bg-orange-600 text-white font-semibold transition"
            >
              Get Started
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
