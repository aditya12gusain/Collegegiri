import React from "react";
import { FeatureContainer, FeatureButton } from "./FeatureElements";

const Feature = () => {
  return (
    <FeatureContainer>
      <h1>Our Speakers</h1>
      <p>
        Meet your <b>Seniors</b>
      </p>
      <FeatureButton target="_blank" href="https://forms.gle/j2Uk9YtcBUXxHa8w9">
        Register Now
      </FeatureButton>
    </FeatureContainer>
  );
};

export default Feature;
