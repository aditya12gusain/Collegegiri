import React from "react";
import {
  ProductsContainer,
  ProductWrapper,
  ProductsHeading,
  AboutTheEvent,
  ProductButton,
} from "./ProductsElements";

import { FaCalendarWeek, FaClock, FaMapMarkedAlt } from "react-icons/fa";

const EventInfo = ({ heading }) => {
  return (
    <ProductsContainer id="eventInfo">
      <ProductsHeading>{heading}</ProductsHeading>
      <ProductWrapper>
        <AboutTheEvent>
          <h1>
            <FaCalendarWeek /> 5-6 December 2020
          </h1>
          <br />
          <h2>
            <FaClock /> 6:00 pm
          </h2>
          <br />
          <h3>
            <FaMapMarkedAlt /> Google Meet
          </h3>
          <br />
          <ProductButton
            target="_blank"
            href="https://forms.gle/j2Uk9YtcBUXxHa8w9"
          >
            Register Now
          </ProductButton>
        </AboutTheEvent>
      </ProductWrapper>
    </ProductsContainer>
  );
};

export default EventInfo;
