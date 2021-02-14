import styled from "styled-components";

export const ProductsContainer = styled.div`
  /* width: 100vw;
  box-sizing: content-box; */
  height: 140vh;
  padding: 5rem calc((100vw - 1300px) / 2);
  background: #150f0f;
  color: #fff;

  @media (min-width: 1600px) {
    height: 60vh;
  }

  @media (max-width: 600px) {
    height: 180vh;
  }

  @media (max-width: 500px) {
    height: 190vh;
  }

  @media (max-width: 400px) {
    height: 140vh;
  }
`;

export const ProductWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
`;

export const ProductsHeading = styled.h1`
  font-size: clamp(2rem, 2.5vw, 3rem);
  text-align: center;
  margin-bottom: 5rem;
`;

export const AboutTheEvent = styled.div`
  font-size: clamp(1.9rem, 1vw, 3rem);
  text-align: center;
  padding: 30px 30px;
  border-radius: 10px;
  background-image: url(./details.jpg);
  background-position: center;
  background-size: cover;

  p {
    color: #e9ba23;
    display: inline-block;
    font-weight: 500;
  }

  @media (max-width: 400px) {
    font-size: 20px;
  }
`;
