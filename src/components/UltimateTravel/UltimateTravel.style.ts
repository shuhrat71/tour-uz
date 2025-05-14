import styled from "@emotion/styled";

export const UltimateTravelStyle = styled.div`
  padding-top: 100px;

  .title {
    font-size: 45px;
    font-weight: bold;
    text-align: center;
  }
`;

export const Cards__wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 30px;
  gap: 20px;
  @media (max-width: 923px) {
    justify-content: center;
  }

  .link {
    text-decoration: none;
  }
`;
