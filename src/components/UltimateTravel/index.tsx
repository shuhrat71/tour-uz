"use client";

import React, { useState } from "react";

import Link from "next/link";

import {
  Box,
  Card,
  Stack,
  Divider,
  CardMedia,
  Typography,
  CardContent,
  CardActionArea,
} from "@mui/material";
import { AccessAlarm } from "@mui/icons-material";

import { DataType, getDocuments } from "@/mocs";

import { Cards__wrapper, UltimateTravelStyle } from "./UltimateTravel.style";

const UltimateTravel = () => {
  const [travelData, setTravelData] = useState<DataType[] | null>(null);

  getDocuments("TravelData", setTravelData);

  return (
    <UltimateTravelStyle>
      <Typography className="title">Ultimate Travel Experience</Typography>
      <Cards__wrapper>
        {travelData?.map(({ id, img, title, price, limit }) => (
          <Link href={`/${id}`} className="link" key={title}>
            <Card
              sx={{
                boxShadow: 3,
              }}
              className="card"
            >
              <CardActionArea>
                <CardMedia
                  image={img}
                  height="240"
                  component="img"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography
                    variant="h5"
                    gutterBottom
                    component="div"
                    fontWeight={"bold"}
                  >
                    {title}
                  </Typography>
                  <Divider
                    sx={{
                      margin: "20px 0 20px 0",
                    }}
                  />
                  <Stack
                    width="100%"
                    direction="row"
                    alignItems="end"
                    justifyContent="space-between"
                  >
                    <Box>
                      <Typography fontSize={15}>Starts from:</Typography>
                      <Typography
                        fontSize={28}
                        variant="body1"
                        fontWeight={700}
                        color="#68ae49"
                      >
                        {price}
                      </Typography>
                      <Typography
                        variant="caption"
                        sx={{
                          opacity: "50%",
                        }}
                      >
                        TAXES/INCL/PERS
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        gap: "10px",
                        opacity: "60%",
                        display: "flex",
                      }}
                    >
                      <AccessAlarm />
                      <Typography>{limit}</Typography>
                    </Box>
                  </Stack>
                </CardContent>
              </CardActionArea>
            </Card>
          </Link>
        ))}
      </Cards__wrapper>
    </UltimateTravelStyle>
  );
};

export default UltimateTravel;
