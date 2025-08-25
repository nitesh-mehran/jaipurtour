import React from "react";
import { Link } from "react-router-dom";
import { FaWhatsapp, FaInstagram, FaFacebookF } from "react-icons/fa";

const Footer = () => {
  const usefulLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Taxi Services", path: "/taxi-services" },
    { name: "Contact Us", path: "/contact" },
  ];

  const rajasthanPackages = [
    { name: "Rajasthan Family Tour", path: "/rajasthan-family-tour" },
    { name: "Rajasthan Honeymoon Tour", path: "/rajasthan-honeymoon-tour" },
    { name: "Rajasthan Adventure Tour", path: "/rajasthan-adventure-tour" },
    { name: "Rajasthan Wildlife Tour", path: "/rajasthan-wildlife-tour" },
    { name: "Rajasthan Heritage Tour", path: "/rajasthan-heritage-tour" },
    { name: "Golden Triangle Tour", path: "/golden-triangle-tour" },
  ];

  const sameDayTours = [
    { name: "Jaipur Sightseeing", path: "/sameday/jaipur-sightseeing" },
    { name: "Same day Ajmer Pushkar", path: "/sameday/ajmer-pushkar" },
    { name: "Same Day Ranthambore Tour", path: "/sameday/ranthambore-tour" },
    { name: "Bhangarh Abhaneri Tour", path: "/sameday/bhangarh-abhaneri-tour" },
    { name: "Jaipur Agra Tour", path: "/sameday/jaipur-agra-tour" },
    { name: "Shekhawati Same Day Trip", path: "/sameday/shekhawati-trip" },
  ];

  return (
    <footer className="relative bg-gray-900 text-white pt-16 pb-8 font-sans">
      {/* Footer Main Grid */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        
        {/* Useful Links */}
        <div>
          <h3 className="text-2xl font-bold mb-6 border-b border-yellow-500 inline-block pb-1">
            Useful Links
          </h3>
          <ul className="space-y-3">
            {usefulLinks.map((link, idx) => (
              <li key={idx}>
                <Link
                  to={link.path}
                  className="hover:text-yellow-400 transition-all duration-300"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Same Day Tours */}
        <div>
          <h3 className="text-2xl font-bold mb-6 border-b border-yellow-500 inline-block pb-1">
            Same Day Tours
          </h3>
          <ul className="space-y-3">
            {sameDayTours.map((tour, idx) => (
              <li key={idx}>
                <Link
                  to={tour.path}
                  className="hover:text-yellow-400 transition-all duration-300"
                >
                  {tour.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Rajasthan Packages */}
        <div>
          <h3 className="text-2xl font-bold mb-6 border-b border-yellow-500 inline-block pb-1">
            Rajasthan Packages
          </h3>
          <ul className="space-y-3">
            {rajasthanPackages.map((pkg, idx) => (
              <li key={idx}>
                <Link
                  to={pkg.path}
                  className="hover:text-yellow-400 transition-all duration-300"
                >
                  {pkg.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-2xl font-bold mb-6 border-b border-yellow-500 inline-block pb-1">
            Contact
          </h3>
          <p className="text-gray-300 mb-3">
            🏨 Hotel Royal Rajwada, Amer Jaipur - 302028
          </p>
          <p className="text-gray-300 mb-3">📞 +91-8005937270</p>
          <p className="text-gray-300 mb-3">✉️ info@jaipurtourtrip.in</p>
          <div className="flex items-center gap-4 mt-4">
            <a
              href="https://wa.me/918005937270"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 p-3 rounded-full transition transform hover:scale-110"
            >
              <FaWhatsapp size={20} />
            </a>
            <a
              href="https://instagram.com/jaipurtourtrip"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-pink-500 hover:bg-pink-600 p-3 rounded-full transition transform hover:scale-110"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="https://facebook.com/jaipurtourtrip"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 p-3 rounded-full transition transform hover:scale-110"
            >
              <FaFacebookF size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-16 border-t border-gray-700 pt-6 text-center text-gray-400">
        © 2025 Jaipur Tour Trip. All Rights Reserved
      </div>

      {/* Fixed Floating Social Icons */}
      <div className="fixed right-4 bottom-20 flex flex-col gap-3 z-50">
        <a
          href="https://wa.me/918005937270"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg transition transform hover:scale-110 animate-bounce"
        >
          <FaWhatsapp size={20} />
        </a>
        <a
          href="https://instagram.com/jaipurtourtrip"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-pink-500 hover:bg-pink-600 text-white p-3 rounded-full shadow-lg transition transform hover:scale-110 animate-bounce delay-150"
        >
          <FaInstagram size={20} />
        </a>
        <a
          href="https://facebook.com/jaipurtourtrip"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition transform hover:scale-110 animate-bounce delay-300"
        >
          <FaFacebookF size={20} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
