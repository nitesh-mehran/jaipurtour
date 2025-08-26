// src/pages/TourDetail.jsx
import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { rajasthanTours } from "../tourData/rajasthanTours";
import { FaClock, FaMapMarkerAlt } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const TourDetail = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const { tourId } = useParams();
  const tour = rajasthanTours.find((t) => t.id === tourId);

  if (!tour)
    return (
      <p className="text-center mt-10 text-lg font-semibold text-red-500">
        Tour not found
      </p>
    );

  return (
    <section className="font-sans text-gray-800">
      {/* Hero Image */}
      <div
        className="relative w-full h-[40vh] md:h-[50vh] bg-cover bg-center rounded-b-3xl shadow-lg"
        style={{ backgroundImage: `url(${tour.img})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/25 to-black/50 flex items-center justify-center rounded-b-3xl px-4">
          <h1
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white text-center drop-shadow-lg tracking-wide"
            data-aos="zoom-in"
          >
            {tour.name}
          </h1>
        </div>
      </div>

      {/* Tour Info Cards */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex items-center bg-yellow-50 shadow-md rounded-2xl p-6 space-x-4 hover:shadow-xl transition-transform transform hover:-translate-y-1">
          <FaClock className="text-4xl text-pink-500" />
          <p className="text-lg font-semibold">
            Duration: <span className="font-normal">{tour.duration}</span>
          </p>
        </div>
        <div className="flex items-center bg-yellow-50 shadow-md rounded-2xl p-6 space-x-4 hover:shadow-xl transition-transform transform hover:-translate-y-1">
          <FaMapMarkerAlt className="text-4xl text-blue-500" />
          <p className="text-lg font-semibold">
            Destinations:{" "}
            <span className="font-normal">{tour.destinations.join(", ")}</span>
          </p>
        </div>
      </div>

      {/* Itinerary Cards */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        {tour.itinerary.map((day, index) => (
          <div
            key={index}
            className="p-6 bg-yellow-50 border-l-4 border-yellow-400 rounded-2xl shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-1 hover:scale-[1.02]"
            data-aos="fade-up"
          >
            <h3 className="font-semibold text-xl mb-2 text-pink-600">
              {day.day}
            </h3>
            <p className="text-gray-700 leading-relaxed">{day.details}</p>
          </div>
        ))}
      </div>

      {/* Book Now Button */}
      <div className="text-center py-10">
        <Link to="/contact">
          <button className="w-[250px] md:w-[300px] py-4 bg-gradient-to-r from-blue-500 via-pink-500 to-yellow-500 text-white font-bold rounded-full shadow-xl animate-pulse hover:opacity-90 transition transform hover:scale-105">
            🚖 Book Now
          </button>
        </Link>
      </div>
    </section>
  );
};

export default TourDetail;
