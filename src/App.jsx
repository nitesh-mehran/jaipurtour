import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./pages/About";
import Contact from "./pages/Contact";
import TaxiService from "./pages/TaxiService";
import TourDetail from "./pages/TourDetail";
import SameDayTourDetail from "./pages/SameDayTourDetail";
import ScrollToTop from "./pages/ScrollToTop";

const App = () => {
  return ( 
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/taxi-services" element={<TaxiService />} />
        <Route path="/:tourId" element={<TourDetail />} />
        <Route path="/sameday/:tourId" element={<SameDayTourDetail />} />
      </Routes>
      <Footer/>
    </Router>
  );
};

export default App;
