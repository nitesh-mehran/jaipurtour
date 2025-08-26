import React, { useEffect } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast, Toaster } from "sonner";

// Zod validation schema
const contactSchema = z.object({
  user_name: z.string().min(2, "Name must be at least 2 characters"),
  user_email: z.string().email("Invalid email address"),
  user_phone: z
    .string()
    .nonempty("Phone number is required")
    .regex(/^\d{10}$/, "Phone number must be exactly 10 digits"),
  message: z.string().min(5, "Message must be at least 5 characters"),
});

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(contactSchema),
  });

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const sendEmail = async (data) => {
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        data,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      toast.success("Message Sent Successfully!");
      reset();
    } catch (err) {
      toast.error("Something went wrong. Please try again ⚠");
    }
  };

  return (
    <section className="bg-gray-50 text-gray-800 font-sans">
      <Toaster position="top-right" />
      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center h-[40vh] md:h-[50vh] shadow-lg"
        style={{ backgroundImage: "url('/images/contact-bg.png')" }}
      >
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center  px-4">
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
        <div className="bg-white p-6 sm:p-8 rounded-2xl shadow hover:shadow-xl transition" data-aos="fade-up">
          <FaPhoneAlt className="text-3xl sm:text-4xl text-blue-500 mx-auto mb-3" />
          <h3 className="text-lg sm:text-xl font-semibold mb-2">Call Us</h3>
          <p className="text-gray-600">+91-8005937270</p>
          <p className="text-gray-600">+91-9929269447</p>
        </div>
        <div className="bg-white p-6 sm:p-8 rounded-2xl shadow hover:shadow-xl transition" data-aos="fade-up" data-aos-delay="200">
          <FaEnvelope className="text-3xl sm:text-4xl text-green-500 mx-auto mb-3" />
          <h3 className="text-lg sm:text-xl font-semibold mb-2">Email Us</h3>
          <p className="text-gray-600 break-words">jaipurtourtrip27@gmail.com</p>
        </div>
        <div className="bg-white p-6 sm:p-8 rounded-2xl shadow hover:shadow-xl transition" data-aos="fade-up" data-aos-delay="400">
          <FaMapMarkerAlt className="text-3xl sm:text-4xl text-indigo-500 mx-auto mb-3" />
          <h3 className="text-lg sm:text-xl font-semibold mb-2">Visit Us</h3>
          <p className="text-gray-600">
            Hotel Royal Rajwada Multicuisine Restaurant <br /> Amer Jaipur - 302028
          </p>
        </div>
      </div>

      {/* Contact Form */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-900 mb-8 sm:mb-10" data-aos="fade-up">
          Get In Touch
        </h2>
        <form onSubmit={handleSubmit(sendEmail)} className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 grid grid-cols-1 md:grid-cols-2 gap-6" data-aos="zoom-in">
          <div>
            <input type="text" placeholder="Your Name" {...register("user_name")} className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
            {errors.user_name && <p className="text-red-600 text-sm mt-1">{errors.user_name.message}</p>}
          </div>
          <div>
            <input type="email" placeholder="Your Email" {...register("user_email")} className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" />
            {errors.user_email && <p className="text-red-600 text-sm mt-1">{errors.user_email.message}</p>}
          </div>
          <div className="md:col-span-2">
            <input type="text" placeholder="Your Phone (10 digits)" {...register("user_phone")} className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" />
            {errors.user_phone && <p className="text-red-600 text-sm mt-1">{errors.user_phone.message}</p>}
          </div>
          <div className="md:col-span-2">
            <textarea placeholder="Your Message" rows="5" {...register("message")} className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"></textarea>
            {errors.message && <p className="text-red-600 text-sm mt-1">{errors.message.message}</p>}
          </div>
          <button type="submit" className="md:col-span-2 bg-gradient-to-r from-blue-500 via-pink-500 to-yellow-500 text-white py-3 rounded-full font-semibold hover:opacity-90 transition">
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
