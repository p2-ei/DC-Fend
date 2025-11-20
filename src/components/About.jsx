import React from 'react'
import Footer from './Footer';

export default function About() {
  return (
    <section id="about" className="py-12">
      <div className="bg-gradient-to-r from-gray-50 to-white p-8 rounded-xl">
        <div className="flex gap-10">
          <div className="flex-1">
            <h2 className="text-2xl font-bold">About Desi Service</h2>
            <p className="mt-4 text-gray-600 max-w-lg">
              We connect you with verified local professionals. Built for the
              community — reliable, transparent pricing, trusted reviews.
            </p>
            <ul className="mt-6 space-y-3 text-gray-700">
              <li>• Verified professionals</li>
              <li>• Secure payments</li>
              <li>• Simple booking flow</li>
            </ul>
          </div>
          <div className="w-72">
            <div className="h-44 bg-gray-100 rounded-lg flex items-center justify-center">
              <span className="text-gray-400">Image / Illustration</span>
            </div>
          </div>
        </div>
      </div>
      {/* ✅ Footer */}
      <Footer />
    </section>
  );
}
