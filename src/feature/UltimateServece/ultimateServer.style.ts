"use client";
import styled from "@emotion/styled";

export const UltimateServiceStyle = styled.div`
  padding-top: 100px;

  img {
    border-radius: 10px;
    object-fit: cover;
  }
  .tabPanel {
    border-radius: 5px;
    border: 1px solid #bababa;
  }
  .bookTour {
    width: 100%;
  }
  @media screen and (min-width: 1200px) and (max-width: 1400px) {
    img {
      width: 900px;
    }
  }
`;

export const CostItem = styled.div`
  border-radius: 0.5rem;
  border: 1px solid #e0e0e0;
  display: flex;
  flex-direction: column;
  h1 {
    font-size: 26px;
    color: #22c55e;
    font-weight: bold;
  }
  button {
    padding: 15px;
  }

  h1,
  p {
    padding: 20px 0 0 20px;
  }

  .link {
    padding: 20px;
    text-decoration: none;
    color: white;
  }
`;
