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
            <FaCalendarWeek /> 18 February 2021
          </h1>
          <br />
          <h2>
            <FaClock /> 7 pm - 8:30 pm
          </h2>
          <br />
          <h3>Open Panel</h3>
          <br />
          <h3>
            <FaMapMarkedAlt /> Google Meet
          </h3>
          <br />
          <ProductButton
            target="_blank"
            href="https://forms.gle/a5jyR1XQAzHFtYnK6"
          >
            Register Now
          </ProductButton>
        </AboutTheEvent>
      </ProductWrapper>
    </ProductsContainer>
  );
};

export default EventInfo;
