import React from "react";
import {
  ProductsContainer,
  ProductWrapper,
  ProductsHeading,
  AboutTheEvent,
} from "./ProductsElements";

const EventDetails = ({ heading }) => {
  return (
    <ProductsContainer id="eventDetails">
      <ProductsHeading>{heading}</ProductsHeading>
      <ProductWrapper>
        <AboutTheEvent>
          College Starter Pack by Collegegiri is an initiative to help the
          freshers to figure out their college life. Many students are missing
          out on the introductory college interactions and have to begin this
          new chapter online. The first year of college builds up a foundation
          for memorable and successful college life but fret not as we got you
          covered. We gathered speakers from diversified backgrounds, colleges,
          and universities to come and share their first-year experiences and
          the mistakes they made. It is a fun interactive session to give the
          freshers a kick-start for college. Join us to learn, interact, and
          share. Feel free to join as a high-school student; we are open to all.
        </AboutTheEvent>
      </ProductWrapper>
    </ProductsContainer>
  );
};

export default EventDetails;
