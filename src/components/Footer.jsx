import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
} from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#708238] mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-white mb-4">NRI buddy</h3>
            <p className="text-white text-opacity-90">
              Your trusted partner for reliable local services. Making life
              easier, one service at a time.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="/services"
                  className="text-white text-opacity-80 hover:text-white transition-colors"
                >
                  Our Services
                </a>
              </li>
              <li>
                <a
                  href="/booking"
                  className="text-white text-opacity-80 hover:text-white transition-colors"
                >
                  Book Now
                </a>
              </li>
              <li>
                <a
                  href="/orders"
                  className="text-white text-opacity-80 hover:text-white transition-colors"
                >
                  My Orders
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white text-opacity-80 hover:text-white transition-colors"
                >
                  About Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-white text-opacity-90">
                <Phone size={18} className="mt-1 flex-shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start gap-2 text-white text-opacity-90">
                <Mail size={18} className="mt-1 flex-shrink-0" />
                <span>help@desiservice.com</span>
              </li>
              <li className="flex items-start gap-2 text-white text-opacity-90">
                <MapPin size={18} className="mt-1 flex-shrink-0" />
                <span>123 Service Street, City, ST 12345</span>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-white mb-4">Follow Us</h4>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white bg-opacity-20 flex items-center justify-center hover:bg-white hover:text-[#708238] text-white transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white bg-opacity-20 flex items-center justify-center hover:bg-white hover:text-[#708238] text-white transition-colors"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white bg-opacity-20 flex items-center justify-center hover:bg-white hover:text-[#708238] text-white transition-colors"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white border-opacity-20 text-center text-white text-opacity-90">
          <p>&copy; 2025 NRI buddy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
