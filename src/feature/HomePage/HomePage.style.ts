import styled from "@emotion/styled";

export const HomePageStyle = styled.div``;

export const SliderWrapper = styled.div`
  position: relative;
  width: 100%;
  max-height: 600px;
  overflow: hidden;
  .slide {
    position: relative;
  }

  .overlay {
    width: 85%;
    position: absolute;
    top: 55%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    z-index: 2;
    text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.7);
  }

  .dark-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.38);
    z-index: 1;
  }

  .overlay h2 {
    margin: 0;
    font-size: 3.2rem;
    text-align: center;
  }

  .overlay p {
    margin-top: 20px;
    font-size: 2.2rem;
    text-align: center;
  }

  img {
    max-height: 600px;
    object-fit: cover;
  }
`;

export const TourActivitieStyle = styled.div`
  margin-top: 60px;
  width: 100%;
  .title {
    font-size: 44px;
    font-weight: bold;
    text-align: center;
    margin-bottom: 30px;
  }

  .shortsWrapper {
    position: relative;
    width: 100%;
    max-width: 250px;
    height: 400px;
    margin: 0 auto;
    border-radius: 10px;
  }

  .shortsWrapper iframe {
    width: 100%;
    height: 100%;
    border: none;
    border-radius: 10px;
  }
`;

export const ExperiensWithUs = styled.div`
  padding: 80px;

  img {
    border-radius: 10px;
  }

  .title {
    font-weight: 700;
    font-size: 32px;
    margin-bottom: 20px;
  }

  .subtitle {
    font-weight: 500;
    font-size: 20px;
  }
`;

export const TouristSpot = styled.div`
  background: linear-gradient(#000000d9, #000000d9),
    url("/images/homeImages/WorldMap.png") no-repeat center center;
  background-size: cover;
  width: 100%;
  min-height: 550px;
  border-radius: 20px;
  position: relative;
  margin: 0 auto;

  .title {
    text-align: center;
    font-size: 40px;
    font-weight: bold;
    color: #ffffff;
    margin-bottom: 10px;
    padding-top: 50px;
  }
`;

export const CityBox = styled.div`
  width: 340px;
  background-color: white;
  border-radius: 7px;
  img {
    width: 100%;
    height: 250px;
    border-radius: 7px 7px 0 0;
  }
`;

export const CityName = styled.div`
  text-align: center;
  h1 {
    font-size: 18px;
  }
  p {
    padding: 10px 0;
  }
`;
