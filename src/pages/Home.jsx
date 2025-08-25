import React, { useEffect } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaRegClock,
  FaHotel,
  FaTaxi,
  FaMapMarkedAlt,
  FaGift,
  FaHeadset,
} from "react-icons/fa";

const sliderImages = ["/aamerfort.png", "/hawamahal.png", "/jalmahal.png"];

const services = [
  {
    title: "Tour Guide",
    desc: "Professional guides to make your Jaipur tour memorable with deep insights into history and culture.",
    icon: <FaMapMarkedAlt size={28} />,
  },
  {
    title: "Hotel Booking",
    desc: "Book budget-friendly or luxury hotels with best deals and instant confirmation.",
    icon: <FaHotel size={28} />,
  },
  {
    title: "Taxi Service",
    desc: "Private taxis for safe and convenient travel around Jaipur anytime.",
    icon: <FaTaxi size={28} />,
  },
  {
    title: "Tour Packages",
    desc: "Explore Jaipur with our curated travel packages for families, couples, and solo travelers.",
    icon: <FaGift size={28} />,
  },
  {
    title: "Customized Tours",
    desc: "Create your own personalized Jaipur itinerary based on your interests and timing.",
    icon: <FaRegClock size={28} />,
  },
  {
    title: "24/7 Support",
    desc: "We provide 24/7 assistance during your travel for any help or emergency.",
    icon: <FaHeadset size={28} />,
  },
];

const sameDayTours = [
  {
    id: "jaipur-sightseeing",
    title: "Jaipur Sightseeing",
    subtitle: "Jaipur Sightseeing Tour",
    desc: "12+ Beautiful Jaipur Sightseeing. 1 day visit to Jaipur, which will include only the most popular and best sections of the city.",
    img: "/hawamahal.png",
  },
  {
    id: "ajmer-pushkar",
    title: "Same day Ajmer Pushkar",
    subtitle: "Same day Ajmer Pushkar",
    desc: "Same day Ajmer Pushkar sightseeing tour will take you to some of the most enchanting sites and monuments. Enjoy this one day trip to Ajmer and Pushkar with your family and friends.",
    img: "/ajmer.png",
  },
  {
    id: "ranthambore-tour",
    title: "Same Day Ranthambore Tour",
    subtitle: "Jaipur Ranthambore Same Day Tour",
    desc: "Full day visit to Ranthambore Wildlife Park by Car/Taxi from Jaipur. Book Jaipur to Ranthambore One Day Tour at lowest Price.",
    img: "/ranthambore.png",
  },
  {
    id: "bhangarh-abhaneri-tour",
    title: "Bhangarh Abhaneri Tour",
    subtitle: "Bhangarh Abhaneri Tour",
    desc: "Same Day Tour of Abhaneri & Bhangarh is the best tour for the traveler who want to explore heritage in lesser time.",
    img: "/bhangarh.png",
  },

  {
    id: "jaipur-agra-tour",
    title: "Jaipur Agra Tour",
    subtitle: "One Day Trip",
    desc: "Jaipur-Agra Same Day Tour Package covers many popular tourist attractions viz. Fatehpur Sikri, Taj Mahal, Agra Fort and much more.",
    img: "/agra.png",
  },
  {
    id: "shekhawati-trip",
    title: "Shekhawati Same Day Trip",
    subtitle: "Shekhawati Same Day Trip",
    desc: "Explore the rich heritage and frescoes of Shekhawati region with this one day tour.",
    img: "/shekhawati.png",
  },
];

const rajasthanPackages = [
  {
    id: "rajasthan-family-tour",
    title: "Rajasthan Family Tour",
    subtitle: "Rajasthan Family Tour",
    desc: "Discover various Rajasthan Family tours at Tour My India and book Rajasthan Family holiday packages at best prices.",
    img: "/familytour.png",
  },
  {
    id: "rajasthan-honeymoon-tour",
    title: "Rajasthan Honeymoon Tour",
    subtitle: "Rajasthan Honeymoon Tour",
    desc: "Book romantic Rajasthan honeymoon tour packages with customized itinerary and luxury hotels at economical price.",
    img: "/honeymoon.png",
  },
  {
    id: "rajasthan-adventure-tour",
    title: "Rajasthan Adventure Tour",
    subtitle: "Rajasthan Adventure Tour",
    desc: "Rajasthan is a tourist destination which has the ability to surprise any tourist with its wide array of adventure tours.",
    img: "/adventuretour.png",
  },
  {
    id: "rajasthan-wildlife-tour",
    title: "Rajasthan Wildlife Tour",
    subtitle: "Rajasthan Wildlife Tour",
    desc: "Rajasthan is one of the most popular wildlife destinations in India. Famous for celebrity tigers, migrant birds, dense flora and other wildlife tourism.",
    img: "/wildlife.png",
  },
  {
    id: "golden-triangle-tour",
    title: "Golden Triangle Tour",
    subtitle: "Golden Triangle Tour",
    desc: "Enjoy a luxurious retreat on this holiday to Delhi, Jaipur and Agra. Enjoy a luxurious vacation on this holiday to Delhi, Agra and Jaipur.",
    img: "/goldentriangle.png",
  },
  {
    id: "rajasthan-heritage-tour",
    title: "Rajasthan Heritage Tour",
    subtitle: "Heritage Experience",
    desc: "Experience the traditional music, dance, and handicrafts of Rajasthan with this Heritage tour package.",
    img: "/Heritagetour.png",
  },
];

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    pauseOnHover: false,
  };

  return (
    <div className="font-sans bg-gray-50">
      {/* Hero Slider */}
      <section className="relative w-full h-[60vh] md:h-screen overflow-hidden">
        <Slider {...sliderSettings}>
          {sliderImages.map((img, idx) => (
            <div key={idx} className="relative w-full h-[60vh] md:h-screen">
              <img
                src={img}
                alt={`Slide ${idx + 1}`}
                className="w-full h-full object-cover object-center"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/0 flex flex-col items-center justify-center text-center text-white px-4 md:px-20"
                data-aos="fade-up"
              >
                <h1 className="text-3xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">
                  Discover the Beauty of Jaipur
                </h1>
                <p className="text-md md:text-2xl mb-6 drop-shadow-md">
                  Explore historic forts, majestic palaces, vibrant markets, and
                  rich culture with our exclusive tours.
                </p>
                <Link
                  to="/contact"
                  className="px-6 md:px-8 py-3 md:py-4 bg-yellow-500 text-black font-bold rounded-xl hover:bg-yellow-400 transition transform hover:scale-102 shadow-2xl"
                >
                  Book Your Tour Now
                </Link>
              </div>
            </div>
          ))}
        </Slider>
      </section>

      {/* Welcome Section */}
      <section className="py-16 md:py-20 bg-white">
      <div
        className="max-w-7xl mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center gap-10"
        data-aos="fade-up"
      >
        {/* Left Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6">
            Welcome Jaipur Tour Trip
          </h2>

          <ul className="text-gray-700 text-md md:text-lg leading-relaxed mb-6 space-y-2">
            <li>🏰 Explore Historic Forts & Palaces</li>
            <li>🛍️ Vibrant Local Markets</li>
            <li>🐪 Desert & Camel Safari Experiences</li>
            <li>🎨 Traditional Villages & Handicrafts</li>
          </ul>

          {/* Direct Link styled as Button */}
          <Link
            to="/about"
            className="inline-block px-6 py-3 bg-yellow-500 text-black font-bold rounded-xl hover:bg-yellow-400 transition transform hover:scale-105 shadow-lg"
          >
            Read More
          </Link>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2 overflow-hidden rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500">
          <img
            src="/jaipurwelcome.png"
            alt="Welcome Jaipur"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>

      {/* Same Day Tours */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <h2
            className="text-3xl md:text-5xl font-extrabold text-center mb-12"
            data-aos="fade-up"
          >
            Same Day Tours
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-10">
            {sameDayTours.map((tour, idx) => (
              <div
                key={idx}
                className="bg-yellow-50 rounded-2xl shadow-xl overflow-hidden transform transition-all duration-500 hover:bg-yellow-100 hover:-translate-y-2 hover:scale-102 flex flex-col h-full group relative"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={tour.img}
                    alt={tour.title}
                    className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl md:text-2xl font-bold mb-1">
                    {tour.title}
                  </h3>
                  <h4 className="text-md md:text-lg font-semibold mb-2 text-gray-600">
                    {tour.subtitle}
                  </h4>
                  <p className="text-gray-700 mb-4 flex-grow">{tour.desc}</p>
                  <Link
                    to={`/sameday/${tour.id}`}
                    className="px-4 py-2 bg-yellow-500 text-black font-bold rounded-lg hover:bg-yellow-400 transition transform hover:scale-102 shadow-md w-full text-center"
                  >
                    View More Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rajasthan Packages */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <h2
            className="text-3xl md:text-5xl font-extrabold text-center mb-12"
            data-aos="fade-up"
          >
            Rajasthan Tour Packages
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-10">
            {rajasthanPackages.map((pkg, idx) => (
              <div
                key={idx}
                className="bg-yellow-50 rounded-2xl shadow-xl overflow-hidden transform transition-all duration-500 hover:bg-yellow-100 hover:-translate-y-2 hover:scale-102 flex flex-col h-full group relative"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={pkg.img}
                    alt={pkg.title}
                    className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl md:text-2xl font-bold mb-1">
                    {pkg.title}
                  </h3>
                  <h4 className="text-md md:text-lg font-semibold mb-2 text-gray-600">
                    {pkg.subtitle}
                  </h4>
                  <p className="text-gray-700 mb-4 flex-grow">{pkg.desc}</p>
                  <Link
                    to={`/${pkg.id}`}
                    className="px-4 py-2 bg-yellow-500 text-black font-bold rounded-lg hover:bg-yellow-400 transition transform hover:scale-102 shadow-md w-full text-center"
                  >
                    View More Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Taxi Booking */}
      <section className="py-16 md:py-20 bg-gray-100">
        <div
          className="max-w-7xl mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center gap-10"
          data-aos="fade-up"
        >
          <div className="md:w-1/2 overflow-hidden rounded-2xl shadow-2xl transform hover:scale-102 transition-transform duration-500 relative group">
            <img
              src="/taxi.png"
              alt="Taxi Booking"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center text-white px-4">
              <h3 className="text-3xl md:text-4xl font-extrabold mb-3 drop-shadow-lg">
                Book a Taxi
              </h3>
              <p className="text-md md:text-lg mb-4 drop-shadow-md">
                Reliable taxi service for safe and convenient travel around
                Jaipur anytime.
              </p>
              <Link to="/taxi-services">
                <button className="px-6 py-3 md:px-8 md:py-4 bg-yellow-500 text-black font-bold rounded-xl hover:bg-yellow-400 transition transform hover:scale-102 shadow-2xl">
                  More Details
                </button>
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6">
              Your Journey Made Easy
            </h2>
            <p className="text-gray-700 text-md md:text-lg leading-relaxed mb-6">
              Book your taxi quickly and explore Jaipur without any hassle. We
              provide comfortable and safe rides to all major tourist spots and
              destinations.
            </p>
            <Link to="/contact">
              <button className="px-6 py-3 bg-yellow-500 text-black font-bold rounded-xl hover:bg-yellow-400 transition transform hover:scale-102 shadow-lg">
                Book Now
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <h2
            className="text-3xl md:text-5xl font-extrabold text-center mb-12"
            data-aos="fade-up"
          >
            What We Offer
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8  md:gap-10">
            {services.map((service, idx) => (
              <div
                key={idx}
                className="p-6 md:p-8 bg-gradient-to-br from-yellow-400 to-yellow-300 rounded-2xl shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 hover:scale-102 transition-all duration-500 flex flex-col justify-between h-full"
              >
                <div className="flex items-center mb-4 text-black">
                  {service.icon}
                  <h3 className="ml-3 text-xl md:text-2xl font-bold">
                    {service.title}
                  </h3>
                </div>
                <p className="text-black text-md">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews / Testimonials */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <h2
            className="text-3xl md:text-5xl font-extrabold text-center mb-12"
            data-aos="fade-up"
          >
            What Our Travelers Say
          </h2>

          <div className="overflow-hidden relative">
            <div className="flex animate-scroll gap-8">
              {[
                {
                  name: "Rahul Sharma",
                  img: "/testimonial6.jpg",
                  rating: 5,
                  review:
                    "Amazing experience! Jaipur tour was perfectly organized. Highly recommend to everyone.",
                },
                {
                  name: "Anjali Verma",
                  img: "/testimonial6.jpg",
                  rating: 4,
                  review:
                    "Great service and comfortable taxis. Hotel arrangements were top-notch!",
                },
                {
                  name: "Ramesh Singh",
                  img: "/testimonial6.jpg",
                  rating: 5,
                  review:
                    "Rajasthan tour packages were perfect. Fun-filled & memorable trip!",
                },
                {
                  name: "Priya Kaur",
                  img: "/testimonial6.jpg",
                  rating: 4,
                  review:
                    "24/7 support made our trip hassle-free. Excellent assistance!",
                },
                {
                  name: "Vikram Joshi",
                  img: "/testimonial6.jpg",
                  rating: 5,
                  review:
                    "Highly satisfied! Guides were professional and knowledgeable.",
                },
                {
                  name: "Sneha Gupta",
                  img: "/testimonial6.jpg",
                  rating: 5,
                  review:
                    "Loved the Jaipur sightseeing package. Everything was well-planned.",
                },
              ].map((test, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl shadow-xl p-6 md:p-8 min-w-[300px] flex flex-col items-center text-center"
                >
                  <img
                    src={test.img}
                    alt={test.name}
                    className="w-20 h-20 rounded-full object-cover mb-4 border-2 border-yellow-500"
                  />
                  <h4 className="text-lg font-bold mb-1">{test.name}</h4>
                  <div className="flex mb-2">
                    {Array(test.rating)
                      .fill(0)
                      .map((_, i) => (
                        <svg
                          key={i}
                          className="w-5 h-5 text-yellow-500"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.947a1 1 0 00.95.69h4.148c.969 0 1.371 1.24.588 1.81l-3.36 2.44a1 1 0 00-.364 1.118l1.286 3.947c.3.921-.755 1.688-1.54 1.118l-3.36-2.44a1 1 0 00-1.175 0l-3.36 2.44c-.784.57-1.838-.197-1.539-1.118l1.286-3.947a1 1 0 00-.364-1.118l-3.36-2.44c-.784-.57-.38-1.81.588-1.81h4.148a1 1 0 00.951-.69l1.286-3.947z" />
                        </svg>
                      ))}
                  </div>
                  <p className="text-gray-700 text-sm md:text-md">
                    {test.review}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <style>
          {`
            @keyframes scroll {
              0% { transform: translateX(0%); }
              100% { transform: translateX(-50%); }
            }
            .animate-scroll {
              display: flex;
              gap: 2rem;
              animation: scroll 15s linear infinite;
            }
          `}
        </style>
      </section>
    </div>
  );
};

export default Home;
