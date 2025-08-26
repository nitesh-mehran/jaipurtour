// src/pages/TaxiService.jsx
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const TaxiService = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const taxis = [
    {
      name: "Innova",
      price: "Just Rs.15/Km",
      desc: "Spacious and comfortable Toyota Innova – ideal for family trips, business travel, and outstation journeys. It can easily accommodate up to 6 passengers plus a driver, with ample luggage space. Known for smooth rides and reliability, Innova is the top choice for long-distance travel across Rajasthan and nearby states.",
      img: "/images/innova.png",
    },
    {
      name: "Tempo Traveller",
      price: "Just Rs.22/Km",
      desc: "Perfect for groups of 9 to 12 people. Tempo Traveller ensures comfortable seating, air conditioning, and enough space for luggage. A great option for sightseeing tours, wedding events, group outings, and long trips where traveling together enhances the fun. Safe, spacious, and economical for big groups.",
      img: "/images/tempo.png",
    },
    {
      name: "Etios Taxi",
      price: "Just Rs.10/Km",
      desc: "Toyota Etios is one of the most popular luxury + economical taxis. With excellent legroom, comfort, and mileage, it’s the perfect option for couples, solo travelers, or small families. Book now at the lowest cost and enjoy a reliable and safe ride in and around Jaipur or across Rajasthan.",
      img: "/images/etios.png",
    },
    {
      name: "Swift Taxi",
      price: "Just Rs.10/Km",
      desc: "Compact, stylish, and super-efficient – Swift Dzire is the most demanded car for traveling on Indian roads. Best suited for city tours, airport transfers, and budget-friendly travel. Despite its compact size, it provides great comfort and ensures a hassle-free travel experience at the lowest fare.",
      img: "/images/swift.png",
    },
  ];

  return (
    <section className="bg-gray-50 text-gray-800 font-sans">
      {/* Hero Section */}
      <div
        className="relative w-full h-[40vh] md:h-[50vh] bg-cover bg-center flex items-center justify-center shadow-lg"
        style={{ backgroundImage: "url('/images/taxi-bg.png')" }}
      >
        <div className="absolute inset-0 bg-black/50 "></div>
        <h1
          className="relative text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg text-center"
          data-aos="zoom-in"
        >
          Taxi Services
        </h1>
      </div>

      {/* Intro Text */}
      <div
        className="max-w-4xl mx-auto text-center px-6 py-12"
        data-aos="fade-up"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Reliable & Affordable Taxi Services in Jaipur
        </h2>
        <p className="text-gray-600 leading-relaxed text-lg">
          Looking for safe, comfortable, and budget-friendly taxi services in
          Jaipur? We provide well-maintained cars with professional drivers to
          make your travel stress-free. Whether you need an airport pickup, a
          full-day sightseeing tour, or an outstation journey, we’ve got the
          perfect ride for you. Choose from our wide range of vehicles including
          Innova, Tempo Traveller, Etios, and Swift at the best rates in town.
        </p>
      </div>

      {/* Taxi Cards */}
      <div className="max-w-7xl mx-auto px-6 pb-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {taxis.map((taxi, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 flex flex-col"
            data-aos="fade-up"
          >
            {/* Image */}
            <div className="h-64 w-full overflow-hidden">
              <img
                src={taxi.img}
                alt={taxi.name}
                loading="lazy"
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Content */}
            <div className="p-5 flex flex-col flex-1 justify-between">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-1">
                  Book {taxi.name}
                </h2>
                <p className="text-yellow-600 font-semibold mb-3">
                  {taxi.price}
                </p>
                <p className="text-gray-600 text-sm md:text-base">
                  {taxi.desc}
                </p>
              </div>

              {/* CTA Button */}
              <Link
                to="/contact"
                className="mt-5 bg-gradient-to-r from-blue-500 via-pink-500 to-yellow-500 text-white py-2 px-6 rounded-full font-semibold hover:opacity-90 transition self-start"
              >
                Book Now
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TaxiService;
