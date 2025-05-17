"use client";
import styled from "@emotion/styled";

export const AboutStyle = styled.div`
  padding: 100px 50px;

  img {
    flex: 1;
    border-radius: 10px;
    object-fit: cover;
  }

  .tourDescription {
    font-size: 22px;
    color: rgb(110, 110, 110);
  }

  .title {
    font-size: 35px;
  }

  .makeThings {
    background-color: #f4efca;
    border-radius: 20px;
    padding: 30px 20px;
    display: flex;
    align-items: center;
    .icon {
      color: black;
      font-size: 25px;
      font-weight: bold;
    }
    .title {
      margin-left: 10px;
      color: #f66432;
      font-size: 20px;
      font-weight: bold;
    }
  }
  .bestToutSection__title {
    font-size: 35px;
    text-align: center;
    margin-top: 50px;
    font-weight: 700;
  }
  @media only screen and (min-width: 900px) and (max-width: 1200px) {
    padding: 100px 40px;
    img {
      width: 100%;
      height: 50vh;
      object-fit: cover;
    }
  }
  @media only screen and (min-width: 600px) and (max-width: 900px) {
    padding: 80px 30px;
    img {
      width: 100%;
      height: 50vh;
      object-fit: cover;
    }

    .title {
      font-size: 25px;
    }

    .tourDescription {
      font-size: 18px;
    }

    .makeThings {
      background-color: #f4efca;
      border-radius: 20px;
      padding: 20px 10px;
      display: flex;
      align-items: center;
      .icon {
        color: black;
        font-size: 20px;
        font-weight: bold;
      }
      .title {
        margin-left: 10px;
        color: #f66432;
        font-size: 18px;
        font-weight: bold;
      }
    }
    .bestToutSection__title {
      font-size: 30px;
    }
  }
  @media only screen and (min-width: 320px) and (max-width: 600px) {
    padding: 100px 20px;
    img {
      width: 100%;
      height: 50vh;
      object-fit: cover;
    }

    .title {
      font-size: 20px;
    }

    .tourDescription {
      font-size: 16px;
    }

    .makeThings {
      background-color: #f4efca;
      border-radius: 20px;
      padding: 20px 10px;
      display: flex;
      align-items: center;
      .icon {
        color: black;
        font-size: 20px;
        font-weight: bold;
      }
      .title {
        margin-left: 10px;
        color: #f66432;
        font-size: 18px;
        font-weight: bold;
      }
    }

    .bestToutSection__title {
      font-size: 25px;
    }
  }
`;
