import { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Package,
  FileText,
  Heart,
  ShoppingBag,
} from "lucide-react";
import { Link } from "react-router-dom";
//

const slides = [
  {
    id: "package-courier",
    icon: Package,
    title: "Package & Courier",
    description:
      "Fast delivery to your doorstep! We pick up and deliver your packages safely.",
    image:
      "https://images.unsplash.com/photo-1620455800201-7f00aeef12ed?auto=format&fit=crop&w=1080&q=80",
    emoji: "📦",
  },
  {
    id: "passport-visa",
    icon: FileText,
    title: "Passport & Visa Help",
    description:
      "We help you with travel documents and passport applications. Easy and simple!",
    image:
      "https://images.unsplash.com/photo-1613244470042-e69e8ccb303a?auto=format&fit=crop&w=1080&q=80",
    emoji: "✈️",
  },
  {
    id: "family-elder-care",
    icon: Heart,
    title: "Family & Elder Care",
    description:
      "Kind and caring helpers for your loved ones. We take care with love!",
    image:
      "https://images.unsplash.com/photo-1723433892471-62f113c8c9a0?auto=format&fit=crop&w=1080&q=80",
    emoji: "❤️",
  },
  {
    id: "personal-shopping",
    icon: ShoppingBag,
    title: "Shopping & Errands",
    description:
      "We shop for you and bring groceries to your home. Sit back and relax!",
    image:
      "https://images.unsplash.com/photo-1571340910399-354d2ce7f1dd?auto=format&fit=crop&w=1080&q=80",
    emoji: "🛒",
  },
];

export function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  const current = slides[currentSlide];
  const Icon = current.icon;

  return (
    <div className="relative bg-[#FEFAF6] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-8 items-center min-h-[500px]">
          {/* Left Side - Text */}
          <div className="space-y-6">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[#708238] shadow-lg">
              <Icon size={40} className="text-white" />
            </div>
            <div className="text-6xl">{current.emoji}</div>
            <h1 className="text-[#708238] text-4xl font-bold">
              {current.title}
            </h1>
            <p className="text-[#5a5a5a] text-lg">{current.description}</p>
            <div className="flex gap-4 flex-wrap">
              <Link
                to={`/service/${current.id}`}
                className="inline-block bg-white text-[#708238] px-8 py-4 rounded-2xl hover:bg-[#F5EBDD] transition-all duration-300 shadow-lg border-2 border-[#708238]"
              >
                Explore This Service
              </Link>
              <Link
                to="/booking"
                state={{ selectedService: current.id }}
                className="inline-block bg-[#708238] text-white px-8 py-4 rounded-2xl hover:bg-[#5a8e8b] transition-all duration-300 shadow-lg"
              >
                Book Now
              </Link>
            </div>
          </div>

          {/* Right Side - Image */}
          <div>
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src={current.image}
                alt={current.title}
                className="w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-center items-center gap-4 mt-8">
          <button
            onClick={prevSlide}
            className="w-12 h-12 rounded-full bg-[#708238] text-white flex items-center justify-center hover:bg-[#5a8e8b] transition-colors shadow-lg"
          >
            <ChevronLeft size={24} />
          </button>

          <div className="flex gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? "w-8 bg-[#708238]"
                    : "w-3 bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            className="w-12 h-12 rounded-full bg-[#708238] text-white flex items-center justify-center hover:bg-[#5a8e8b] transition-colors shadow-lg"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </div>
  );
}
