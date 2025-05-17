"use client";
import styled from "@emotion/styled";

export const HeaderStyle = styled.div`
  background-color: rgb(254, 253, 253);
  width: 100%;
  position: fixed;
  color: #2c2b39;
  padding: 2px 0;
  box-shadow: 0 1px 17px 0 #999999;
  z-index: 10;

  .pageBtn {
    font-family: "Rubik";
    font-weight: bold;
    background: transparent;
    transition: 0.3s;
    border-radius: 0;
    font-size: 16px;
    &:hover {
      color: #ff9800;
    }
  }

  .callIcon {
    font-size: 30px;
    color: #55bd00;
    cursor: pointer;
  }
  .questionLink {
    text-decoration: none;
    display: block;
    color: black;
    font-size: 18px;
    font-weight: bold;
    cursor: pointer;
  }

  .questionPhone {
    display: block;
    padding-top: 5px;
    text-decoration: none;
    color: #55bd00;
    font-size: 18px;
    font-weight: bold;
    cursor: pointer;
  }

  .link {
    text-decoration: none;
  }

  @media only screen and (min-width: 320px) and (max-width: 600px) {
    .questionLink,
    .questionPhone,
    .divider {
      display: none;
    }
  }
`;
