"use client";
import styled from "@emotion/styled";

export const UltimateTravelStyle = styled.div`
  padding-top: 100px;

  .title {
    font-size: 45px;
    font-weight: bold;
    text-align: center;
  }

  @media only screen and (min-width: 320px) and (max-width: 600px) {
    padding-top: 80px;
    .title {
      font-size: 33px;
      font-weight: bold;
      text-align: center;
    }
  }
`;

export const Cards__wrapper = styled.div`
  box-sizing: border-box;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 30px;
  gap: 20px;

  .link {
    text-decoration: none;
  }

  .card {
    width: 600px;
    max-width: 550px;
    padding: 0;
  }
  @media only screen and (min-width: 320px) and (max-width: 600px) {
    padding: 10px;
    .card {
      width: 100%;
      max-width: 430px;
      min-width: 230px;
      padding: 0;
    }
    .card img {
      width: 100%;
      height: auto;
      object-fit: cover;
    }
  }
`;
