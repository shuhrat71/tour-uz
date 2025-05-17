"use client";
import React, { useEffect } from "react";
import Slider from "react-slick";

import Image from "next/image";

import { collection, getDocs } from "firebase/firestore";

import {
  Grade,
  HealthAndSafety,
  SelfImprovement,
  WorkspacePremium,
} from "@mui/icons-material";
import { Box, Grid, Stack, Container, Typography } from "@mui/material";

import { CITIES, DATA, SETTINGS, SHORTS } from "./mocs";
import { GoodSide, UltimateTravel, AccordionCities } from "@/components";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import {
  TouristSpot,
  HomePageStyle,
  SliderWrapper,
  ExperiensWithUs,
  TourActivitieStyle,
} from "./HomePage.style";
import { db } from "@/firebase/config";

const HomePage = () => {
  useEffect(() => {
    const getDocuments = async () => {
      const querySnapshot = await getDocs(collection(db, "HomeCaruselData"));

      console.log(querySnapshot);
    };

    getDocuments();
  }, []);
  return (
    <HomePageStyle>
      <SliderWrapper>
        <Slider {...SETTINGS}>
          {DATA.map((item, index) => (
            <div key={index} className="slide">
              <div className="dark-overlay"></div>
              <div className="overlay">
                <h2>{item.title}</h2>
                <p>{item.description}</p>
              </div>
              <Image
                width={820}
                height={300}
                src={item.image}
                alt={item.title}
                style={{ width: "100%", height: "auto" }}
              />
            </div>
          ))}
        </Slider>
      </SliderWrapper>

      <Container maxWidth="xl">
        <TourActivitieStyle>
          <Typography className="title">Exploring Tour Activities</Typography>
          <Grid
            container
            spacing={2}
            textAlign="center"
            alignItems="center"
            justifyContent="center"
          >
            {SHORTS.map((src, index) => (
              <Grid key={index} size={{ lg: 2 }}>
                <Box className="shortsWrapper">
                  <iframe
                    src={src}
                    frameBorder="0"
                    allowFullScreen
                    title={`YouTube video ${index}`}
                    referrerPolicy="strict-origin-when-cross-origin"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  ></iframe>
                </Box>
              </Grid>
            ))}
          </Grid>
        </TourActivitieStyle>

        <ExperiensWithUs>
          <Stack direction={{ md: "column", lg: "row" }} gap={6}>
            <Box flex={1} className="experienceImgBox">
              <Image
                width={500}
                height={700}
                alt="experience.jpg"
                src="/images/homeImages/experience.jpg"
              />
            </Box>
            <Box flex={2}>
              <Typography
                className="title"
                textAlign={{ xs: "center", lg: "start" }}
              >
                Experience Uzbekistan with Us
              </Typography>
              <Typography className="subtitle">
                We specialize in providing professional guided tours across the
                stunning landscapes and historic cities of Uzbekistan. Whether
                you're looking for a relaxing city tour or an adventurous
                mountain escape, we offer customized tour packages tailored to
                your preferences. Our packages include comfortable stays at 4-5
                star hotels, experienced guides, and reliable transport services
                — all at reasonable prices. Let us help you explore the best of
                Uzbekistan with a personalized and unforgettable travel
                experience.
              </Typography>
              <Box mt={7}>
                <GoodSide title=" Safety First Always" Icon={HealthAndSafety} />
                <GoodSide
                  Icon={WorkspacePremium}
                  title="  Trusted Travel Guide"
                />
                <GoodSide
                  Icon={SelfImprovement}
                  title="  Time Stress SavingsSafety"
                />
                <GoodSide title="  360+ Tour Success" Icon={Grade} />
              </Box>
            </Box>
          </Stack>
        </ExperiensWithUs>

        <TouristSpot>
          <Typography className="title">Finest Tourist Spot</Typography>
          <Grid container spacing={3} padding={3}>
            {CITIES.map(({ img, name, description }, index) => (
              <Grid size={{ xs: 12, sm: 6, md: 3 }} key={name}>
                <AccordionCities
                  img={img}
                  name={name}
                  description={description}
                  index={index}
                />
              </Grid>
            ))}
          </Grid>
        </TouristSpot>

        <UltimateTravel />
      </Container>
    </HomePageStyle>
  );
};

export default HomePage;
