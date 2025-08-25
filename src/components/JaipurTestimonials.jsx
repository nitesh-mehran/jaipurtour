import React from "react";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    name: "Rahul Sharma",
    review:
      "Amazing experience! Jaipur trip was perfectly organized, from hotel check-ins to sightseeing tours. Our family loved every moment.",
    img: "https://i.pravatar.cc/100?img=12",
    rating: 5,
  },
  {
    name: "Anjali Mehta",
    review:
      "The Pink City tour was magical. The forts and palaces looked stunning, and our guide explained everything beautifully.",
    img: "https://i.pravatar.cc/100?img=18",
    rating: 5,
  },
  {
    name: "Vikram Patel",
    review:
      "Very smooth arrangements. Desert safari in Jaisalmer was thrilling. Only wished the hotel check-in was a bit faster.",
    img: "https://i.pravatar.cc/100?img=24",
    rating: 4,
  },
  {
    name: "Sneha Kapoor",
    review:
      "Our Rajasthan trip felt luxurious and stress-free. The itinerary was perfectly balanced between culture and comfort.",
    img: "https://i.pravatar.cc/100?img=28",
    rating: 5,
  },
  {
    name: "Arjun Nair",
    review:
      "Best travel experience ever! Elephant ride at Amber Fort and traditional Rajasthani dinner were unforgettable.",
    img: "https://i.pravatar.cc/100?img=32",
    rating: 5,
  },
  {
    name: "Priya Singh",
    review:
      "Highly professional team. We felt safe and cared for throughout the trip. Definitely recommending them to friends.",
    img: "https://i.pravatar.cc/100?img=36",
    rating: 5,
  },
  {
    name: "Ravi Joshi",
    review:
      "The desert camp experience under the stars was mesmerizing. Hospitality and arrangements were excellent.",
    img: "https://i.pravatar.cc/100?img=40",
    rating: 5,
  },
  {
    name: "Kavita Deshmukh",
    review:
      "Beautifully arranged cultural shows and sightseeing tours. Our guide was very knowledgeable about Jaipur’s history.",
    img: "https://i.pravatar.cc/100?img=44",
    rating: 4,
  },
  {
    name: "Manish Gupta",
    review:
      "From forts to palaces, every moment was memorable. The travel was comfortable, and hotels were premium quality.",
    img: "https://i.pravatar.cc/100?img=48",
    rating: 5,
  },
  {
    name: "Neha Reddy",
    review:
      "Seamless bookings and great 24/7 support. My parents really enjoyed the heritage walks and shopping experiences.",
    img: "https://i.pravatar.cc/100?img=52",
    rating: 5,
  },
  {
    name: "Siddharth Malhotra",
    review:
      "We enjoyed every bit of Jaipur sightseeing. Hawa Mahal and City Palace were absolute highlights of our journey.",
    img: "https://i.pravatar.cc/100?img=56",
    rating: 5,
  },
  {
    name: "Meera Iyer",
    review:
      "Trip was very well-managed. Taxis were always on time and guides were polite. Only wished the pace was slower.",
    img: "https://i.pravatar.cc/100?img=60",
    rating: 4,
  },
  {
    name: "Aditya Verma",
    review:
      "Truly premium service! The camel ride and folk dance in the desert made our trip extra special.",
    img: "https://i.pravatar.cc/100?img=64",
    rating: 5,
  },
  {
    name: "Roshni Chawla",
    review:
      "Perfect family vacation. The kids loved exploring forts while we enjoyed the cultural shows and Rajasthani food.",
    img: "https://i.pravatar.cc/100?img=68",
    rating: 5,
  },
  {
    name: "Harsh Vardhan",
    review:
      "Excellent team coordination and round-the-clock support. Our Rajasthan journey was smooth, joyful, and memorable.",
    img: "https://i.pravatar.cc/100?img=70",
    rating: 5,
  },
];

const JaipurTestimonials = () => {
  return (
    <section className="w-full py-16 px-6 bg-gradient-to-b from-yellow-50 to-orange-100">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-10">
        🏰 What Our Travelers Say
      </h2>

      <motion.div
        className="flex gap-6 overflow-x-auto scrollbar-hide px-2"
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {testimonials.map((t, index) => (
          <motion.div
            key={index}
            className="min-w-[300px] md:min-w-[350px] bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center"
            whileHover={{ scale: 1.03 }}
          >
            <img
              src={t.img}
              alt={t.name}
              className="w-16 h-16 rounded-full object-cover mb-4 border-2 border-yellow-400"
            />
            <h3 className="text-lg font-semibold text-gray-900">{t.name}</h3>

            <div className="flex justify-center my-2">
              {[...Array(t.rating)].map((_, i) => (
                <FaStar key={i} className="text-yellow-500" />
              ))}
            </div>

            <p className="italic text-gray-600">{t.review}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default JaipurTestimonials;
