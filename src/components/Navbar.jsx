import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null); // desktop dropdown
  const [mobileDropdown, setMobileDropdown] = useState(null); // mobile dropdown

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
  ];

  const rightMenuItems = [
    { name: "Taxi Services", path: "/taxi-services" },
    { name: "Contact", path: "/contact" },
  ];

  const dropdownItems = {
    "Rajasthan Tour Packages": [
      { name: "Rajasthan Family Tour", path: "/rajasthan-family-tour" },
      { name: "Rajasthan Honeymoon Tour", path: "/rajasthan-honeymoon-tour" },
      { name: "Rajasthan Adventure Tour", path: "/rajasthan-adventure-tour" },
      { name: "Rajasthan Wildlife Tour", path: "/rajasthan-wildlife-tour" },
      { name: "Golden Triangle Tour", path: "/golden-triangle-tour" },
      { name: "Rajasthan Heritage Tour", path: "/rajasthan-heritage-tour" },
    ],
    "Day Tour Packages": [
      { name: "Jaipur Sightseeing", path: "/sameday/jaipur-sightseeing" },
      { name: "Same day Ajmer Pushkar", path: "/sameday/ajmer-pushkar" },
      { name: "Same Day Ranthambore Tour", path: "/sameday/ranthambore-tour" },
      { name: "Bhangarh Abhaneri Tour", path: "/sameday/bhangarh-abhaneri-tour" },
      { name: "Jaipur Agra Tour", path: "/sameday/jaipur-agra-tour" },
      { name: "Shekhawati Same Day Trip", path: "/sameday/shekhawati-trip" },
    ],
  };

  const dropdownKeys = Object.keys(dropdownItems);

  // Helper for text color based on scroll
  const getTextColor = () =>
    isScrolled ? "text-gray-800" : "text-white";

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center space-x-2 transition-all duration-500"
          >
            {isScrolled ? (
              <img
                src="/tourlogo.png"
                alt="Jaipur Tour Logo"
                className="h-16 w-auto object-contain"
              />
            ) : (
              <span className="font-bold text-xl md:text-2xl text-white transition-opacity duration-500">
                Jaipur Tour Trip
              </span>
            )}
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 items-center">
            {menuItems.map((item, idx) => (
              <Link
                key={idx}
                to={item.path}
                className={`relative font-medium transition-colors duration-300 ${getTextColor()} hover:text-yellow-500 after:block after:h-[2px] after:w-0 after:bg-yellow-500 after:transition-all after:duration-300 hover:after:w-full`}
              >
                {item.name}
              </Link>
            ))}

            {dropdownKeys.map((key) => (
              <div
                key={key}
                className="relative"
                onMouseEnter={() => setOpenDropdown(key)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button
                  className={`flex items-center font-medium transition-colors duration-300 ${getTextColor()} hover:text-yellow-500`}
                >
                  {key} <ChevronDown size={18} className="ml-1" />
                </button>
                <div
                  className={`absolute top-full left-0 mt-2 w-56 bg-white shadow-lg rounded-md overflow-hidden transition-all duration-300 z-50 ${
                    openDropdown === key ? "opacity-100 visible" : "opacity-0 invisible"
                  }`}
                >
                  {dropdownItems[key].map((item, idx) => (
                    <Link
                      key={idx}
                      to={item.path}
                      className="block px-4 py-2 text-gray-800 hover:bg-yellow-500 hover:text-white"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            ))}

            {/* Right Menu */}
            {rightMenuItems.map((item, idx) => (
              <Link
                key={idx}
                to={item.path}
                className={`relative font-medium transition-colors duration-300 ${getTextColor()} hover:text-yellow-500 after:block after:h-[2px] after:w-0 after:bg-yellow-500 after:transition-all after:duration-300 hover:after:w-full`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`focus:outline-none ${getTextColor()}`}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute w-full bg-white shadow-lg overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-screen" : "max-h-0"
        }`}
      >
        <div className="px-4 py-4 space-y-2">
          {menuItems.map((item, idx) => (
            <Link
              key={idx}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className="block text-gray-800 hover:text-yellow-500 font-medium transition-colors duration-300"
            >
              {item.name}
            </Link>
          ))}

          {dropdownKeys.map((key) => (
            <div key={key}>
              <button
                onClick={() =>
                  setMobileDropdown(mobileDropdown === key ? null : key)
                }
                className="flex justify-between w-full text-gray-800 hover:text-yellow-500 font-medium py-2 px-2"
              >
                {key}
                <ChevronDown size={18} />
              </button>
              {mobileDropdown === key &&
                dropdownItems[key].map((item, idx) => (
                  <Link
                    key={idx}
                    to={item.path}
                    onClick={() => {
                      setIsOpen(false);
                      setMobileDropdown(null);
                    }}
                    className="block pl-6 py-2 text-gray-700 hover:bg-yellow-500 hover:text-white transition-colors duration-300"
                  >
                    {item.name}
                  </Link>
                ))}
            </div>
          ))}

          {/* Right menu mobile */}
          {rightMenuItems.map((item, idx) => (
            <Link
              key={idx}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className="block text-gray-800 hover:text-yellow-500 font-medium transition-colors duration-300"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
