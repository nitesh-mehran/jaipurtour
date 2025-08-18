import React, { useEffect } from "react";
import { FaGlobeAsia, FaRegSmile, FaBus, FaStar } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="bg-gradient-to-b from-pink-50 via-yellow-50 to-blue-50 text-gray-800 font-sans">
      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center h-[60vh] rounded-b-3xl shadow-lg"
        style={{ backgroundImage: "url('/images/about-bg.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center rounded-b-3xl">
          <h1
            className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg tracking-wide"
            data-aos="zoom-in"
          >
            About Us
          </h1>
        </div>
      </div>

      {/* Intro Section */}
      <div className="max-w-7xl mx-auto px-6 py-16 text-center">
        <h2
          className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
          data-aos="fade-up"
        >
          Welcome to Our Travel World 🌍
        </h2>
        <p
          className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          We are a trusted <span className="font-semibold text-yellow-600">Tour & Travel service provider</span> making your journey memorable. Whether you are planning a family vacation, honeymoon trip, or an adventure tour – we provide the best packages, comfort, and complete travel solutions.
        </p>
        <p
          className="text-gray-700 leading-relaxed max-w-3xl mx-auto mt-6"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          We organize private Rajasthan tours where you can explore Forts, Palaces, Deserts, Traditional Villages, colorful cattle fairs, sacred places, camel safaris, beautiful lakes, hill stations, and meet the local people. Sand Dunes near Jaisalmer are very popular among travelers. Rajasthan’s traditional dance and music always impress visitors, and villagers’ handmade items will surprise you.
        </p>
      </div>

      {/* Mission & Vision */}
      <div className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-12">
        <div
          className="bg-gradient-to-tr from-yellow-100 to-yellow-50 p-8 rounded-2xl shadow-md hover:shadow-2xl transition"
          data-aos="fade-right"
        >
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">Our Mission 🚀</h3>
          <p className="text-gray-700">
            Our mission is to provide every traveler with an <span className="font-semibold text-pink-600">affordable, safe, and luxurious travel experience</span>. We want you to explore every corner of the world without any worries. With 10+ years of experience in this field, we know exactly what you want and why.
          </p>
        </div>
        <div
          className="bg-gradient-to-tr from-blue-100 to-blue-50 p-8 rounded-2xl shadow-md hover:shadow-2xl transition"
          data-aos="fade-left"
        >
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">Our Vision 🌟</h3>
          <p className="text-gray-700">
            Our vision is to become India’s top <span className="font-semibold text-pink-600">Tour & Travel brand</span>, making us the first choice for every tourist. We run our business like a family tradition, giving our guests respect and trust. We also provide economical packages according to your budget.
          </p>
        </div>
      </div>

      {/* Services */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h2
          className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center"
          data-aos="fade-up"
        >
          Our Services
        </h2>
        <p className="text-gray-700 text-center max-w-3xl mx-auto mb-10" data-aos="fade-up" data-aos-delay="100">
          Your time and money are important, so we plan everything without disturbing you. We offer ready packages that you can choose, modify, or customize.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            "Hotel Bookings",
            "Air/Railway Ticket Booking",
            "Taxi Services",
            "Same Day Tour",
            "Rajasthan Tour Package",
            "Group & Corporate Bookings"
          ].map((service, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-2xl shadow hover:shadow-2xl transition transform hover:-translate-y-2 text-center"
              data-aos="fade-up"
              data-aos-delay={idx * 100}
            >
              <h4 className="text-xl font-semibold text-gray-800 mb-2">{service}</h4>
            </div>
          ))}
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="bg-gradient-to-r from-yellow-50 via-pink-50 to-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-12"
            data-aos="fade-up"
          >
            Why Choose Us?
          </h2>
          <div className="grid md:grid-cols-4 gap-10">
            <div
              className="bg-white p-6 rounded-2xl shadow hover:shadow-2xl transition transform hover:-translate-y-2"
              data-aos="flip-left"
            >
              <FaGlobeAsia className="text-5xl text-pink-500 mx-auto mb-4" />
              <h4 className="text-xl font-semibold mb-2 text-gray-800">Best Destinations</h4>
              <p className="text-gray-600">
                We cover India’s top tourist destinations – Jaipur, Agra, Rajasthan, Himachal & more.
              </p>
            </div>
            <div
              className="bg-white p-6 rounded-2xl shadow hover:shadow-2xl transition transform hover:-translate-y-2"
              data-aos="flip-left"
              data-aos-delay="100"
            >
              <FaRegSmile className="text-5xl text-yellow-500 mx-auto mb-4" />
              <h4 className="text-xl font-semibold mb-2 text-gray-800">Customer Satisfaction</h4>
              <p className="text-gray-600">
                Our priority is that every customer is 100% satisfied with their trip.
              </p>
            </div>
            <div
              className="bg-white p-6 rounded-2xl shadow hover:shadow-2xl transition transform hover:-translate-y-2"
              data-aos="flip-left"
              data-aos-delay="200"
            >
              <FaBus className="text-5xl text-blue-500 mx-auto mb-4" />
              <h4 className="text-xl font-semibold mb-2 text-gray-800">Comfortable Travel</h4>
              <p className="text-gray-600">
                Luxury cars, AC buses, professional drivers – comfort is our promise.
              </p>
            </div>
            <div
              className="bg-white p-6 rounded-2xl shadow hover:shadow-2xl transition transform hover:-translate-y-2"
              data-aos="flip-left"
              data-aos-delay="300"
            >
              <FaStar className="text-5xl text-green-500 mx-auto mb-4" />
              <h4 className="text-xl font-semibold mb-2 text-gray-800">Affordable Packages</h4>
              <p className="text-gray-600">
                From budget-friendly to luxury packages – plans for every type of traveler.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Closing Note */}
      <div className="max-w-5xl mx-auto px-6 py-16 text-center">
        <h2
          className="text-2xl md:text-3xl font-bold text-gray-900 mb-4"
          data-aos="fade-up"
        >
          Let’s Plan Your Next Journey ✈️
        </h2>
        <p
          className="text-gray-700 mb-6"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Every journey with us will be unforgettable. Book your trip today and make your travel experience extra special!
        </p>
        <a
          href="/contact"
          data-aos="zoom-in"
          className="bg-gradient-to-r from-pink-500 via-yellow-500 to-blue-500 hover:opacity-90 text-white px-10 py-3 rounded-full font-semibold shadow-lg transition"
        >
          Contact Us
        </a>
      </div>
    </section>
  );
};

export default About;
