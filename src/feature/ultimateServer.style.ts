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
  @media screen and (max-width: 1000px) {
    width: 100%;
    margin-top: 20px;
    padding: 0;
  }
  h1,
  p {
    padding: 20px 0 0 20px;
  }
  button {
    margin: 0 20px 20px 20px;
  }

  .link {
    width: 90%;
    text-decoration: none;
    color: white;
  }
`;
