import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { FaGlobeAsia, FaRegSmile, FaBus, FaStar } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="bg-gradient-to-b from-pink-50 via-yellow-50 to-blue-50 text-gray-800 font-sans overflow-x-hidden">
      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center h-[40vh] md:h-[50vh] shadow-lg overflow-hidden"
        // Lazy load hero image using <img> instead of background
      >
        <img
          src="/images/about-bg.jpg"
          alt="About Background"
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center px-4 text-center">
          <h1
            className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg tracking-wide"
            data-aos="zoom-in"
          >
            About Us
          </h1>
        </div>
      </div>

      {/* Intro Section */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 py-10 sm:py-16 text-center">
        <h2
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6"
          data-aos="fade-up"
        >
          Welcome to Our Travel World 🌍
        </h2>
        <p
          className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          We are a trusted{" "}
          <span className="font-semibold text-yellow-600">
            Tour & Travel service provider
          </span>{" "}
          making your journey memorable. Whether you are planning a family
          vacation, honeymoon trip, or an adventure tour – we provide the best
          packages, comfort, and complete travel solutions.
        </p>
        <p
          className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto mt-4 sm:mt-6"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          We organize private Rajasthan tours where you can explore Forts,
          Palaces, Deserts, Traditional Villages, colorful cattle fairs, sacred
          places, camel safaris, beautiful lakes, hill stations, and meet the
          local people. Sand Dunes near Jaisalmer are very popular among
          travelers. Rajasthan’s traditional dance and music always impress
          visitors, and villagers’ handmade items will surprise you.
        </p>
      </div>

      {/* Mission & Vision */}
      <div className="max-w-6xl mx-auto px-3 sm:px-6 py-10 sm:py-12 grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
        <div
          className="bg-gradient-to-tr from-yellow-100 to-yellow-50 p-6 sm:p-8 rounded-2xl shadow-md hover:shadow-2xl transition"
          data-aos="fade-right"
        >
          <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">
            Our Mission 🚀
          </h3>
          <p className="text-sm sm:text-base text-gray-700">
            Our mission is to provide every traveler with an{" "}
            <span className="font-semibold text-pink-600">
              affordable, safe, and luxurious travel experience
            </span>
            . We want you to explore every corner of the world without any
            worries. With 10+ years of experience in this field, we know exactly
            what you want and why.
          </p>
        </div>
        <div
          className="bg-gradient-to-tr from-blue-100 to-blue-50 p-6 sm:p-8 rounded-2xl shadow-md hover:shadow-2xl transition"
          data-aos="fade-left"
        >
          <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">
            Our Vision 🌟
          </h3>
          <p className="text-sm sm:text-base text-gray-700">
            Our vision is to become India’s top{" "}
            <span className="font-semibold text-pink-600">
              Tour & Travel brand
            </span>
            , making us the first choice for every tourist. We run our business
            like a family tradition, giving our guests respect and trust. We
            also provide economical packages according to your budget.
          </p>
        </div>
      </div>

      {/* Services */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 py-12 sm:py-16">
        <h2
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-8 sm:mb-12 text-center"
          data-aos="fade-up"
        >
          Our Services
        </h2>
        <p
          className="text-sm sm:text-base md:text-lg text-gray-700 text-center max-w-3xl mx-auto mb-6 sm:mb-10"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Your time and money are important, so we plan everything without
          disturbing you. We offer ready packages that you can choose, modify,
          or customize.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {[
            "Hotel Bookings",
            "Air/Railway Ticket Booking",
            "Taxi Services",
            "Same Day Tour",
            "Rajasthan Tour Package",
            "Group & Corporate Bookings",
          ].map((service, idx) => (
            <div
              key={idx}
              className="bg-white p-5 sm:p-6 rounded-2xl shadow hover:shadow-2xl transition transform hover:-translate-y-2 text-center"
              data-aos="fade-up"
              data-aos-delay={idx * 100}
            >
              <h4 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">
                {service}
              </h4>
            </div>
          ))}
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="bg-gradient-to-r from-yellow-50 via-pink-50 to-blue-50 py-12 sm:py-16 overflow-x-hidden">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 text-center">
          <h2
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-8 sm:mb-12"
            data-aos="fade-up"
          >
            Why Choose Us?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-10">
            {[
              {
                icon: (
                  <FaGlobeAsia className="text-4xl sm:text-5xl text-pink-500 mx-auto mb-3" />
                ),
                title: "Best Destinations",
                desc: "We cover India’s top tourist destinations – Jaipur, Agra, Rajasthan, Himachal & more.",
              },
              {
                icon: (
                  <FaRegSmile className="text-4xl sm:text-5xl text-yellow-500 mx-auto mb-3" />
                ),
                title: "Customer Satisfaction",
                desc: "Our priority is that every customer is 100% satisfied with their trip.",
              },
              {
                icon: (
                  <FaBus className="text-4xl sm:text-5xl text-blue-500 mx-auto mb-3" />
                ),
                title: "Comfortable Travel",
                desc: "Luxury cars, AC buses, professional drivers – comfort is our promise.",
              },
              {
                icon: (
                  <FaStar className="text-4xl sm:text-5xl text-green-500 mx-auto mb-3" />
                ),
                title: "Affordable Packages",
                desc: "From budget-friendly to luxury packages – plans for every type of traveler.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-5 sm:p-6 rounded-2xl shadow hover:shadow-2xl transition transform hover:-translate-y-2"
                data-aos="flip-left"
                data-aos-delay={idx * 100}
              >
                {item.icon}
                <h4 className="text-lg sm:text-xl font-semibold mb-2 text-gray-800">
                  {item.title}
                </h4>
                <p className="text-sm sm:text-base text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Closing Note */}
      <div className="max-w-5xl mx-auto px-3 sm:px-6 py-12 sm:py-16 text-center">
        <h2
          className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3 sm:mb-4"
          data-aos="fade-up"
        >
          Let’s Plan Your Next Journey ✈️
        </h2>
        <p
          className="text-sm sm:text-base md:text-lg text-gray-700 mb-4 sm:mb-6"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Every journey with us will be unforgettable. Book your trip today and
          make your travel experience extra special!
        </p>
        <Link
          to="/contact"
          data-aos="zoom-in"
          className="bg-gradient-to-r from-pink-500 via-yellow-500 to-blue-500 hover:opacity-90 text-white px-6 sm:px-10 py-2.5 sm:py-3 rounded-full font-semibold shadow-lg transition text-sm sm:text-base"
        >
          Contact Us
        </Link>
      </div>
    </section>
  );
};

export default About;
