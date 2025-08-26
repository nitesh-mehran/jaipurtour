import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Rahul Sharma",
    review:
      "Amazing experience! Jaipur trip was perfectly organized, from hotel check-ins to sightseeing tours. Our family loved every moment.",
  },
  {
    name: "Anjali Mehta",
    review:
      "The Pink City tour was magical. The forts and palaces looked stunning, and our guide explained everything beautifully.",
  },
  {
    name: "Vikram Patel",
    review:
      "Very smooth arrangements. Desert safari in Jaisalmer was thrilling. Only wished the hotel check-in was a bit faster.",
  },
 
];

const JaipurTestimonials = () => {
  return (
    <section className="w-full py-16 px-6 bg-gradient-to-b from-yellow-50 to-orange-100">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-10">
        🏰 What Our Travelers Say
      </h2>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((t, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-2xl shadow-lg p-6 flex flex-col justify-between"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
          >
            {/* Review Text */}
            <p className="italic text-gray-700 text-lg leading-relaxed mb-6">
              "{t.review}"
            </p>

            {/* Traveler Name */}
            <h3 className="text-xl font-semibold text-gray-900 text-right">
              – {t.name}
            </h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default JaipurTestimonials;
