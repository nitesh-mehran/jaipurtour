// src/components/MetaPage.jsx
import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";

const MetaPage = () => {
  const location = useLocation();

  let title = "Jaipur Tour Trip";
  let description = "Explore Jaipur and Rajasthan with our trusted tour & travel services.";

  switch (location.pathname) {
    case "/":
      title = "Home - Jaipur Tour Trip";
      description = "Book your perfect Jaipur tour trip with our private and affordable packages.";
      break;
    case "/about":
      title = "About Us - Jaipur Tour Trip";
      description = "Learn more about our trusted tour & travel services in Jaipur and Rajasthan.";
      break;
    case "/contact":
      title = "Contact Us - Jaipur Tour Trip";
      description = "Get in touch with Jaipur Tour Trip for bookings, queries, or customized tours.";
      break;
    case "/taxi-services":
      title = "Taxi Services - Jaipur Tour Trip";
      description = "Reliable and affordable taxi services in Jaipur for city tours, airport pickups, and outstation trips.";
      break;
    // Rajasthan Tour Packages
    case "/rajasthan-family-tour":
      title = "Rajasthan Family Tour - Jaipur Tour Trip";
      description = "Enjoy a 8 Nights/9 Days family tour across Jaipur, Udaipur, Jodhpur & more.";
      break;
    case "/rajasthan-honeymoon-tour":
      title = "Rajasthan Honeymoon Tour - Jaipur Tour Trip";
      description = "Romantic honeymoon packages in Rajasthan with customized itineraries.";
      break;
    case "/rajasthan-adventure-tour":
      title = "Rajasthan Adventure Tour - Jaipur Tour Trip";
      description = "Experience adventure tours in Rajasthan including desert safaris and more.";
      break;
    case "/rajasthan-wildlife-tour":
      title = "Rajasthan Wildlife Tour - Jaipur Tour Trip";
      description = "Explore wildlife sanctuaries and national parks in Rajasthan with us.";
      break;
    case "/golden-triangle-tour":
      title = "Golden Triangle Tour - Jaipur Tour Trip";
      description = "Visit Delhi, Agra, and Jaipur in one amazing Golden Triangle Tour.";
      break;
    case "/rajasthan-heritage-tour":
      title = "Rajasthan Heritage Tour - Jaipur Tour Trip";
      description = "Discover the royal heritage of Rajasthan including forts, palaces & culture.";
      break;
    // Day Tour Packages
    case "/sameday/jaipur-sightseeing":
      title = "Jaipur Sightseeing - Jaipur Tour Trip";
      description = "Explore Jaipur city and its famous attractions in a single day tour.";
      break;
    case "/sameday/ajmer-pushkar":
      title = "Ajmer & Pushkar Day Tour - Jaipur Tour Trip";
      description = "Visit the sacred cities of Ajmer & Pushkar in a comfortable day trip.";
      break;
    case "/sameday/ranthambore-tour":
      title = "Ranthambore Safari Tour - Jaipur Tour Trip";
      description = "Enjoy a thrilling wildlife safari at Ranthambore National Park.";
      break;
    case "/sameday/bhangarh-abhaneri-tour":
      title = "Bhangarh & Abhaneri Tour - Jaipur Tour Trip";
      description = "Explore the haunted Bhangarh fort & historic Abhaneri in one day.";
      break;
    case "/sameday/jaipur-agra-tour":
      title = "Jaipur & Agra Day Tour - Jaipur Tour Trip";
      description = "Visit Jaipur and Agra in a well-planned same-day tour.";
      break;
    case "/sameday/shekhawati-trip":
      title = "Shekhawati Day Tour - Jaipur Tour Trip";
      description = "Discover the art and havelis of Shekhawati region in Rajasthan.";
      break;
    default:
      title = "Jaipur Tour Trip";
      description = "Explore Jaipur and Rajasthan with our trusted tour & travel services.";
  }

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Helmet>
  );
};

export default MetaPage;
