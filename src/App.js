import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { GlobalStyle } from "./globalStyles";
import Hero from "./components/Hero";
import EventDetails from "./components/EventDetails/EventDetails";
import Products from "./components/Products";
import { productData, productDataTwo } from "./components/Products/data";
import Feature from "./components/Feature";
import Footer from "./components/Footer";
import EventInfo from "./components/EventInfo/EventInfo";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Hero />
      <EventDetails heading="What The Event Is All About?" data={productData} />
      <Feature />
      <Products heading="Meet Your Seniors" data={productData} />
      <EventInfo heading="Event Details" data={productDataTwo} />
      <Footer />
    </Router>
  );
}

export default App;
