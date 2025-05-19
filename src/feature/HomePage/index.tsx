"use client";
import React, { useState } from "react";
import Slider from "react-slick";

import Image from "next/image";

import {
  Box,
  Grid,
  Stack,
  Container,
  CardMedia,
  Accordion,
  Typography,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import {
  Grade,
  ExpandMore,
  HealthAndSafety,
  SelfImprovement,
  WorkspacePremium,
} from "@mui/icons-material";

import { UltimateTravel } from "@/components";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { CITIES, DATA, SETTINGS, SHORTS } from "../helpers";

import {
  TouristSpot,
  HomePageStyle,
  SliderWrapper,
  ExperiensWithUs,
  TourActivitieStyle,
} from "./HomePage.style";
import GoodSide from "@/components/GoodSides";

const HomePage = () => {
  const [expanded, setExpanded] = useState<number | false>(false);

  const handleChange =
    (panel: number) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };
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
                    title={`YouTube video ${index}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                </Box>
              </Grid>
            ))}
          </Grid>
        </TourActivitieStyle>
        <ExperiensWithUs>
          <Stack direction="row" gap={6}>
            <Box flex={1}>
              <Image
                src="/images/homeImages/experience.jpg"
                alt="experience.jpg"
                width={500}
                height={700}
              />
            </Box>
            <Box flex={2}>
              <Typography className="title">
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
                  title="  Trusted Travel Guide"
                  Icon={WorkspacePremium}
                />
                <GoodSide
                  title="  Time Stress SavingsSafety"
                  Icon={SelfImprovement}
                />
                <GoodSide title="  360+ Tour Success" Icon={Grade} />
              </Box>
            </Box>
          </Stack>
        </ExperiensWithUs>
        <TouristSpot>
          <Typography className="title">Finest Tourist Spot</Typography>
          <Stack direction="row" gap={3} p={3}>
            {CITIES.map(({ img, name, description }, index) => (
              <Box key={name} style={{ width: "350px", borderRadius: 5 }}>
                <img
                  src={img}
                  alt={name}
                  style={{
                    width: "100%",
                    height: "220px",
                    objectFit: "cover",
                    borderRadius: 5,
                  }}
                />
                <Accordion
                  expanded={expanded === index}
                  onChange={handleChange(index)}
                  sx={{
                    boxShadow: "none",
                    "&:before": {
                      display: "none",
                    },
                  }}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMore />}
                    aria-controls={`panel${index}-content`}
                    id={`panel${index}-header`}
                  >
                    <Typography fontWeight="bold">{name}</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>{description}</Typography>
                  </AccordionDetails>
                </Accordion>
              </Box>
            ))}
          </Stack>
        </TouristSpot>
        <UltimateTravel />
      </Container>
    </HomePageStyle>
  );
};

export default HomePage;
