import React, { useEffect } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="bg-gradient-to-b from-blue-50 via-yellow-50 to-pink-50 text-gray-800 font-sans">
      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center h-[40vh] md:h-[50vh] rounded-b-3xl shadow-lg"
        style={{ backgroundImage: "url('/images/contact-bg.png')" }}
      >
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center rounded-b-3xl px-4">
          <h1
            className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-white text-center drop-shadow-lg tracking-wide"
            data-aos="zoom-in"
          >
            Contact Us
          </h1>
        </div>
      </div>

      {/* Contact Info */}
      <div className="max-w-6xl mx-auto px-6 py-12 grid gap-6 md:grid-cols-3 text-center">
        <div
          className="bg-white p-6 sm:p-8 rounded-2xl shadow hover:shadow-xl transition"
          data-aos="fade-up"
        >
          <FaPhoneAlt className="text-3xl sm:text-4xl text-pink-500 mx-auto mb-3" />
          <h3 className="text-lg sm:text-xl font-semibold mb-2">Call Us</h3>
          <p className="text-gray-600">+91-8005937270</p>
          <p className="text-gray-600">+91-9929269447</p>
        </div>
        <div
          className="bg-white p-6 sm:p-8 rounded-2xl shadow hover:shadow-xl transition"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <FaEnvelope className="text-3xl sm:text-4xl text-yellow-500 mx-auto mb-3" />
          <h3 className="text-lg sm:text-xl font-semibold mb-2">Email Us</h3>
          <p className="text-gray-600 break-words">info@jaipurtourtrip.in</p>
        </div>
        <div
          className="bg-white p-6 sm:p-8 rounded-2xl shadow hover:shadow-xl transition"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <FaMapMarkerAlt className="text-3xl sm:text-4xl text-blue-500 mx-auto mb-3" />
          <h3 className="text-lg sm:text-xl font-semibold mb-2">Visit Us</h3>
          <p className="text-gray-600">
            Hotel Royal Rajwada Multicuisine Restaurant <br /> Amer Jaipur -
            302028
          </p>
        </div>
      </div>

      {/* Contact Form */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
        <h2
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-900 mb-8 sm:mb-10"
          data-aos="fade-up"
        >
          Get In Touch
        </h2>
        <form
          className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 grid grid-cols-1 md:grid-cols-2 gap-6"
          data-aos="zoom-in"
        >
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          {/* Phone Full Width */}
          <input
            type="text"
            placeholder="Your Phone"
            className="w-full md:col-span-2 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <textarea
            placeholder="Your Message"
            rows="5"
            className="w-full md:col-span-2 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
          ></textarea>
          <button
            type="submit"
            className="md:col-span-2 bg-gradient-to-r from-pink-500 via-yellow-500 to-blue-500 text-white py-3 rounded-full font-semibold hover:opacity-90 transition"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Map Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pb-12 sm:pb-16" data-aos="fade-up">
        <iframe
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.189442158263!2d75.8660455752693!3d26.99142537660019!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db10d7cabd16d%3A0x2c59d4f95e77d3c!2sRoyal%20Rajwada%20Multicuisine%20Restaurant!5e0!3m2!1sen!2sin!4v1692901234567!5m2!1sen!2sin"
          width="100%"
          height="350"
          allowFullScreen=""
          loading="lazy"
          className="rounded-2xl shadow-lg"
        ></iframe>
      </div>
    </section>
  );
};

export default Contact;
