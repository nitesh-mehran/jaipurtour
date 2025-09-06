// src/components/JaipurTestimonials.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const testimonials = [
  {
    name: "Rahul Sharma",
    review:
      "Our Jaipur trip with this tour company was amazing! The guide was knowledgeable and friendly. We visited every major fort and palace comfortably.",
    img: "https://i.pravatar.cc/100?img=1",
    rating: 5,
  },
  {
    name: "Priya Verma",
    review:
      "Loved the Pink City tour! Hotels were top-notch, and the itinerary was perfectly organized. Highly recommended for families.",
    img: "https://i.pravatar.cc/100?img=2",
    rating: 5,
  },
  {
    name: "Arjun Mehta",
    review:
      "Camel ride at Amber Fort and light show at Nahargarh were highlights. Everything went smoothly, very professional service.",
    img: "https://i.pravatar.cc/100?img=3",
    rating: 5,
  },
  {
    name: "Sneha Kapoor",
    review:
      "The city tour was insightful and fun. Loved the mix of history, culture, and shopping experiences. Definitely coming back!",
    img: "https://i.pravatar.cc/100?img=4",
    rating: 5,
  },
  {
    name: "Aman Gupta",
    review:
      "Fantastic experience! The guide explained the history in an engaging way and the sightseeing was very well-planned.",
    img: "https://i.pravatar.cc/100?img=5",
    rating: 5,
  },
  {
    name: "Nisha Malhotra",
    review:
      "Visited Jaipur for a weekend getaway. Loved the hospitality and arrangements. Every detail was taken care of. Stress-free trip!",
    img: "https://i.pravatar.cc/100?img=6",
    rating: 5,
  },
  {
    name: "Rohit Khanna",
    review:
      "The tour was excellent! From Hawa Mahal to City Palace, every place was covered and explained properly. Very happy with the service.",
    img: "https://i.pravatar.cc/100?img=7",
    rating: 5,
  },
  {
    name: "Ananya Singh",
    review:
      "Family trip to Jaipur made unforgettable by this team. Comfortable vehicles, friendly guides, and smooth schedule.",
    img: "https://i.pravatar.cc/100?img=8",
    rating: 5,
  },
  {
    name: "Kunal Bansal",
    review:
      "Highly professional tour service. Pick-up and drop arrangements were perfect, and every attraction was well-timed.",
    img: "https://i.pravatar.cc/100?img=9",
    rating: 5,
  },
  {
    name: "Shreya Patel",
    review:
      "The Jaipur trip was magical! The guide gave great insights about local culture, and the photo spots were amazing.",
    img: "https://i.pravatar.cc/100?img=10",
    rating: 5,
  },
  {
    name: "Varun Sethi",
    review:
      "Excellent tour package. Comfortable stay, knowledgeable guide, and all sightseeing spots included. Worth every penny!",
    img: "https://i.pravatar.cc/100?img=11",
    rating: 5,
  },
  {
    name: "Megha Jain",
    review:
      "First time visiting Jaipur and everything was perfect. Forts, markets, and local cuisine – all managed very well. Truly memorable trip!",
    img: "/testimonial6.jpg",
    rating: 5,
  },
];

const JaipurTestimonials = () => {
  return (
    <section className="w-full py-12 px-6 ">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-10">
        ❤️ What Our Travelers Say
      </h2>

      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={20}
        slidesPerView={1}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="px-4"
      >
        {testimonials.map((t, index) => (
          <SwiperSlide key={index}>
            <motion.div
              className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center h-full transition-transform duration-300 hover:scale-105"
            >
              <img
                src={t.img}
                alt={t.name}
                className="w-16 h-16 rounded-full object-cover mb-4 border-2 border-yellow-300"
              />
              <h3 className="text-lg md:text-xl font-semibold text-gray-900">{t.name}</h3>

              <div className="flex justify-center my-2">
                {[...Array(t.rating)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-500" />
                ))}
              </div>

              <p className="italic text-gray-600 mt-2">{t.review}</p>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default JaipurTestimonials;
