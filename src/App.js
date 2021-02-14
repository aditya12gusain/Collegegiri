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
import "./scrollTrigger.js";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import { render } from "@testing-library/react";

function App() {
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [0.4, 1.1]);

  return (
    <Router>
      <GlobalStyle />
      <section className="section" id="top">
        <Hero />
      </section>
      <section className="section">
        <EventDetails
          heading="What The Event Is All About?"
          data={productData}
        />
      </section>
      <section>
        <Feature />
      </section>
      <section>
        <Products
          heading="Meet Collegegiri Core Team And People Related"
          data={productData}
        />
      </section>
      <section>
        <EventInfo heading="Event Details" data={productDataTwo} />
      </section>
      <Footer />
      <div className="wrapper">
        <motion.div
          className="container"
          style={{
            scale,
            position: "relative",
          }}
          onClick={() => {
            document.location = "#top";
          }}
        >
          <img src="../arrow-up.svg" alt="" />
          <motion.div
            className="item"
            style={{
              scaleY: scrollYProgress,
            }}
          ></motion.div>
        </motion.div>
      </div>
    </Router>
  );
}

export default App;
