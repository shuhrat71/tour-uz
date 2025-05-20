"use client";

import React from "react";

import Image from "next/image";

import {
  Groups,
  SensorOccupied,
  EventAvailable,
  HowToRegRounded,
} from "@mui/icons-material";
import { Box, Container, Grid, Stack, Typography } from "@mui/material";

import { BEST_SIDES_DATA } from "./mocs";
import { UltimateTravel } from "@/components";
import { BestSide, StatsCard } from "./components";

import { AboutStyle } from "./About.style";

const AboutPage = () => {
  return (
    <Container maxWidth="xl">
      <AboutStyle>
        <Typography className="title" fontWeight="bold" mb={2}>
          Making Every Tour an Unforgettable Experience
        </Typography>
        <Stack direction={{ md: "column", lg: "row" }} gap={5}>
          <Box flex={2}>
            <Typography className="tourDescription">
              We specialize in providing professional guided tours across the
              stunning landscapes and historic cities of Uzbekistan. Whether
              you're looking for a relaxing city tour or an adventurous mountain
              escape, we offer customized tour packages tailored to your
              preferences. Our packages include comfortable stays at 4-5 star
              hotels, experienced guides, and reliable transport services — all
              at reasonable prices. Let us help you explore the best of
              Uzbekistan with a personalized and unforgettable travel
              experience.
            </Typography>
            <Grid container spacing={4} mt={{ xs: 2, sm: 4, md: 7 }}>
              {[...Array(4)].map((index) => (
                <Grid className="makeThings" size={{ sm: 6 }} key={index}>
                  <EventAvailable className="icon" />
                  <Typography className="title">
                    Time and Stress Savings
                  </Typography>
                </Grid>
              ))}
            </Grid>
          </Box>
          <Image
            width={400}
            height={550}
            alt="about mage"
            src="/images/aboutImages/image.png"
          />
        </Stack>
        <Stack
          textAlign="center"
          alignItems="center"
          justifyContent="center"
          gap={{ sm: 5, md: 15 }}
          mt={{ xs: 5, sm: 7, ms: 10 }}
          direction={{ xs: "column", sm: "row" }}
        >
          <StatsCard Icon={Groups} amount="1k +" title="Happy Customers" />
          <StatsCard
            amount="500 +"
            title="Tours Success"
            Icon={HowToRegRounded}
          />
          <StatsCard Icon={SensorOccupied} amount="10 +" title="Travel Guide" />
        </Stack>
        <Typography className="bestToutSection__title">
          Why GuideTour Uzbekistan Is The Best?
        </Typography>
        <Grid container spacing={3} mt={5}>
          {BEST_SIDES_DATA.map((item, index) => (
            <Grid size={{ md: 6, lg: 4 }} key={index}>
              <BestSide
                Icon={item.Icon}
                color={item.color}
                title={item.title}
                bgColor={item.bgColor}
                subtitle={item.subtitle}
              />
            </Grid>
          ))}
        </Grid>
        <UltimateTravel />
      </AboutStyle>
    </Container>
  );
};

export default AboutPage;
