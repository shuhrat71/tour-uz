"use client";
import styled from "@emotion/styled";

export const BestSideStyle = styled.div`
  .bestSide {
    border: 1px solid #eeebeb;
    padding: 15px;
    border-radius: 10px;
    .icon {
      padding: 20px;
      border-radius: 50%;
    }
  }
  @media only screen and (min-width: 320px) and (max-width: 600px) {
    .informations {
      text-align: center;
    }
  }
`;
