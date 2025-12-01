import React, { useState } from "react";
import { X, CheckCircle, Home, Plane, Calendar, Utensils } from "lucide-react";

// 🔹 Helper for merging Tailwind classes
const cn = (...classes) => classes.filter(Boolean).join(" ");

// 🔹 Inline sample data (you can replace this later)
const service = {
  id: "passport-visa",
  name: "Passport & Visa Assistance",
  tagline: "Your Travel Documentation Experts",
  description:
    "We help you with everything from booking appointments to document verification and travel support.",
  heroImage:
    "https://images.unsplash.com/photo-1633111158093-c51d43175b77?auto=format&fit=crop&w=1080&q=80",
  backgroundImage:
    "https://images.unsplash.com/photo-1633111158093-c51d43175b77?auto=format&fit=crop&w=1080&q=80",
  internalServices: [
    {
      id: "airport-pickup-drop",
      name: "Airport Pickup & Drop",
      description: "Safe and comfortable transfers to and from the airport.",
      price: 50,
      icon: Plane,
    },
    {
      id: "document-verification",
      name: "Document Verification",
      description: "Ensure your documents are error-free before submission.",
      price: 35,
      icon: CheckCircle,
    },
    {
      id: "appointment-booking",
      name: "Appointment Booking",
      description: "Book your passport/visa appointments quickly.",
      price: 30,
      icon: Calendar,
    },
    {
      id: "accommodation-booking",
      name: "Accommodation Booking",
      description: "Stay near the office during your visit.",
      price: 40,
      icon: Home,
    },
    {
      id: "food-arrangement",
      name: "Food Arrangement",
      description: "Get meal plans during your stay.",
      price: 20,
      icon: Utensils,
    },
  ],
};

// 🔹 Inline Dialog component
const Dialog = ({ open, onClose, title, children }) => {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="relative bg-white rounded-xl p-6 max-w-lg w-[90%] shadow-xl">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-black"
        >
          <X size={20} />
        </button>
        <h2 className="text-xl font-semibold text-olive mb-2">{title}</h2>
        <div className="text-gray-700">{children}</div>
      </div>
    </div>
  );
};

// 🔹 Main Page Component
export default function ServiceDetailPage() {
  const [selectedServices, setSelectedServices] = useState([]);
  const [dialogData, setDialogData] = useState(null);

  const toggleService = (s) => {
    if (selectedServices.find((item) => item.id === s.id)) {
      setSelectedServices(selectedServices.filter((item) => item.id !== s.id));
    } else {
      setSelectedServices([...selectedServices, s]);
    }
  };

  const total = selectedServices.reduce((sum, s) => sum + s.price, 0);

  return (
    <div className="min-h-screen bg-[#fafafa] text-gray-800">
      {/* Hero Section */}
      <section
        className="relative w-full h-[400px] flex items-center justify-center text-center bg-cover bg-center"
        style={{
          backgroundImage: `url(${service.backgroundImage})`,
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-white max-w-2xl">
          <h1 className="text-4xl font-bold mb-3">{service.name}</h1>
          <p className="text-lg mb-5">{service.tagline}</p>
          <button className="bg-olive hover:bg-olive/90 text-white px-6 py-2 rounded-full font-medium">
            Book Now
          </button>
        </div>
      </section>

      {/* Description */}
      <section className="max-w-5xl mx-auto py-10 px-4">
        <h2 className="text-2xl font-semibold text-olive mb-4">
          About the Service
        </h2>
        <p className="text-gray-700 mb-8">{service.description}</p>

        {/* Internal Services */}
        <h3 className="text-xl font-semibold text-olive mb-4">
          Available Sub-Services
        </h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {service.internalServices.map((sub) => {
            const Icon = sub.icon;
            const isAdded = selectedServices.find((item) => item.id === sub.id);
            return (
              <div
                key={sub.id}
                className="p-5 border rounded-xl bg-white shadow-sm hover:shadow-md transition"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-olive/10 p-3 rounded-full text-olive">
                    <Icon size={22} />
                  </div>
                  <h4 className="text-lg font-medium">{sub.name}</h4>
                </div>
                <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                  {sub.description}
                </p>
                <p className="font-semibold text-olive mb-4">₹{sub.price}</p>
                <div className="flex gap-2">
                  <button
                    onClick={() => toggleService(sub)}
                    className={cn(
                      "flex-1 px-3 py-2 rounded-lg text-sm font-medium transition",
                      isAdded
                        ? "bg-gray-200 text-gray-600"
                        : "bg-olive text-white hover:bg-olive/90"
                    )}
                  >
                    {isAdded ? "Remove" : "Add Service"}
                  </button>
                  <button
                    onClick={() => setDialogData(sub)}
                    className="flex-1 border border-olive text-olive px-3 py-2 rounded-lg text-sm font-medium hover:bg-olive/10 transition"
                  >
                    Learn More
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Summary */}
        {selectedServices.length > 0 && (
          <div className="mt-10 border-t pt-6">
            <h3 className="text-xl font-semibold text-olive mb-3">
              Selected Services
            </h3>
            <ul className="space-y-2">
              {selectedServices.map((s) => (
                <li
                  key={s?.id}
                  className="flex justify-between bg-white border p-3 rounded-lg shadow-sm"
                >
                  <span>{s.name}</span>
                  <span className="font-semibold text-olive">₹{s.price || "no price found" }</span>
                </li>
              ))}
            </ul>
            <div className="mt-4 flex justify-between items-center">
              <p className="text-lg font-medium">Total: ₹{total}</p>
              <button className="bg-olive hover:bg-olive/90 text-white px-5 py-2 rounded-full font-medium">
                Proceed to Booking
              </button>
            </div>
          </div>
        )}
      </section>

      {/* Learn More Dialog */}
      <Dialog
        open={!!dialogData}
        onClose={() => setDialogData(null)}
        title={dialogData?.name}
      >
        <p>{dialogData?.description}</p>
        <p className="mt-3 text-olive font-semibold">
          Price: ₹{dialogData?.price}
        </p>
      </Dialog>
    </div>
  );
}
