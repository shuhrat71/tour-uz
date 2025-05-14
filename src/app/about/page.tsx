"use client";

import { AboutStyle } from "@/feature/about.style";
import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import {
  EventAvailable,
  Groups,
  HowToRegRounded,
  SensorOccupied,
} from "@mui/icons-material";
import StatsCard from "@/feature/components/StatsCard";

type Props = {};

const About = (props: Props) => {
  return (
    <Container maxWidth="xl">
      <AboutStyle>
        <Typography variant="h4" fontWeight="bold" mb={2}>
          Making Every Tour an Unforgettable Experience
        </Typography>
        <Stack direction="row" gap={5}>
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
            <Grid container spacing={4} mt={7}>
              {[...Array(4)].map(() => (
                <Grid className="makeThings" size={{ lg: 6 }}>
                  <EventAvailable className="icon" />
                  <Typography className="title">
                    Time and Stress Savings
                  </Typography>
                </Grid>
              ))}
            </Grid>
          </Box>
          <Image
            src="/images/aboutImages/image.png"
            alt="about mage"
            width={400}
            height={550}
          />
        </Stack>
        <Stack
          direction="row"
          textAlign="center"
          alignItems="center"
          justifyContent="center"
          gap={15}
          mt={10}
        >
          <StatsCard Icon={Groups} amount="1k +" title="Happy Customers" />
          <StatsCard
            Icon={HowToRegRounded}
            amount="500 +"
            title="Tours Success"
          />
          <StatsCard Icon={SensorOccupied} amount="10 +" title="Travel Guide" />
        </Stack>
        <Typography variant="h4" textAlign="center" mt={12} fontWeight={700}>
          Why GuideTour Uzbekistan Is The Best?
        </Typography>
        <Grid container spacing={3}></Grid>
      </AboutStyle>
    </Container>
  );
};

export default About;
