import styled from "styled-components";

export const ProductsContainer = styled.div`
  /* width: 100vw; */
  min-height: 100vh;
  padding: 0rem calc((100vw - 1300px) / 2) 0rem calc((100vw - 1300px) / 2);
  background: #150f0f;
  color: #fff;
`;

export const ProductWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
  padding-bottom: 30px;
`;

export const ProductsHeading = styled.h1`
  font-size: clamp(2rem, 2.5vw, 3rem);
  text-align: center;
  margin-bottom: 5rem;
`;

export const AboutTheEvent = styled.div`
  font-size: clamp(1.9rem, 1vw, 3rem);
  text-align: center;
  padding: 0 0px;
`;

export const ProductButton = styled.a`
  font-size: 1rem;
  padding: 1rem 4rem;
  border: none;
  background: #e31837;
  color: #fff;
  transition: 0.2 ease-out;
  text-decoration: none;

  &:hover {
    background: #ffc500;
    transition: 0.2s ease-out;
    cursor: pointer;
    color: #000;
  }
`;
