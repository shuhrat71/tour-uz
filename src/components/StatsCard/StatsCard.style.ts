"use client";
import styled from "@emotion/styled";

export const StatsCardStyle = styled.div`
  .amount {
    font-size: 33px;
    font-weight: 700;
  }

  .title {
    font-size: 20px;
  }

  @media only screen and (min-width: 600px) and (max-width: 900px) {
    .amount {
      font-size: 25px;
      font-weight: 700;
    }

    .title {
      font-size: 18px;
    }
  }

  @media only screen and (min-width: 320px) and (max-width: 600px) {
    border: 1px solid #eeebee;
    object-fit: contain;
    width: 100%;
    margin-bottom: 10px;
    padding: 10px;
    border-radius: 20px;
  }
`;
