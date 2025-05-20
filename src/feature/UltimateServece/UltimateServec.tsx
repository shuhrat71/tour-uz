"use client";
import React, { useEffect, useState } from "react";

import Link from "next/link";
import Image from "next/image";
import { useParams } from "next/navigation";

import {
  Box,
  Tab,
  Stack,
  Button,
  Divider,
  Container,
  Typography,
} from "@mui/material";
import { TabList, TabPanel, TabContext } from "@mui/lab";

import { TARVEL_DATA } from "./mocs";
import { TravelDay } from "./components";
import { DataType, getDocuments } from "@/mocs";

import {
  CostItem,
  UltimateServiceStyle,
} from "@/feature/UltimateServece/ultimateServer.style";

const UltimateServicePage = () => {
  const [value, setValue] = React.useState("1");
  const [travelData, setTravelData] = useState<DataType[] | null>(null);

  useEffect(() => {
    getDocuments("TravelData", setTravelData);
  }, []);

  const { id } = useParams<{ id: string }>();

  const tour = travelData?.find((item) => item.id === id);

  if (!tour) {
    return <Typography variant="h6">Tour not found</Typography>;
  }

  const { img, title, price, limit } = tour;

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <UltimateServiceStyle>
      <Container maxWidth="xl">
        <Typography variant="h5" fontWeight={700}>
          {title}
        </Typography>
        <Stack direction={{ md: "column", lg: "row" }} mt={3} gap={2}>
          <Box flex={3}>
            <Image
              src={img}
              alt={title}
              width={0}
              height={0}
              sizes="100vw"
              style={{
                width: "100%",
                height: "auto",
                objectFit: "cover",
                borderRadius: "10px",
              }}
            />{" "}
            <Box sx={{ width: "100%", typography: "body1" }}>
              <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                  <TabList
                    onChange={handleChange}
                    aria-label="lab API tabs example"
                  >
                    <Tab label="OVERWIEV" value="1" />
                    <Tab label="ITINERARY" value="2" />
                    <Tab label="INCLUDED" value="3" />
                  </TabList>
                </Box>
                <Box className="tabPanel" mt={1}>
                  <TabPanel value="1">
                    <Typography variant="body1" color="#333">
                      Experience a captivating journey through Uzbekistan,
                      visiting its most iconic cities and landmarks. Start in
                      Tashkent , the vibrant capital known for its stunning
                      blend of modern and Soviet-era architecture. Travel to the
                      ancient city of Samarkand , a UNESCO World Heritage Site
                      famous for the majestic Registan Square. Explore Bukhara ,
                      a historical center of culture and religion with over 140
                      architectural monuments. This tour offers a perfect mix of
                      cultural exploration and relaxation, ensuring a memorable
                      experience in Uzbekistan.
                    </Typography>
                    <Typography variant="body1" color="#333" mt={3}>
                      {limit}
                    </Typography>
                  </TabPanel>
                  <TabPanel value="2">
                    <Box>
                      {TARVEL_DATA.map((day, index) => (
                        <TravelDay
                          key={index}
                          title={day.title}
                          items={day.items}
                        />
                      ))}
                    </Box>
                    <Typography mt={3}>{limit}</Typography>
                  </TabPanel>
                  <TabPanel value="3">
                    <Typography variant="h5" fontWeight="bold">
                      Include:
                    </Typography>
                    <Typography variant="body1">
                      ✅ Local guides in Tashkent, Samarkand, and Bukhara
                    </Typography>
                    <Typography variant="body1">
                      ✅ Private transportation within each city
                    </Typography>
                    <Divider sx={{ my: 2 }} />
                    <Typography variant="h5" fontWeight="bold">
                      Not Include:
                    </Typography>
                    <Typography variant="body1">
                      ❌ International flights
                    </Typography>
                    <Typography variant="body1">❌ Lunch & dinner</Typography>
                    <Typography variant="body1">❌ Entrance tickets</Typography>
                  </TabPanel>
                </Box>
              </TabContext>
            </Box>
          </Box>
          <Box className="bookTour" flex={1}>
            <CostItem>
              <Typography variant="h1" margin={"0 0 10px 0"}>
                {price}
              </Typography>
              <Typography variant="body1">Duration: {limit}</Typography>
              <Divider sx={{ margin: "20px 0 0 0" }} />
              <Link href="/contact" className="link">
                <Button fullWidth variant="contained">
                  Book Now
                </Button>
              </Link>
            </CostItem>
          </Box>
        </Stack>
      </Container>
    </UltimateServiceStyle>
  );
};

export default UltimateServicePage;
