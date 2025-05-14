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
`;
