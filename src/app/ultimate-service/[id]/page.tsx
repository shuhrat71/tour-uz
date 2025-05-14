"use client";
import React from "react";

import Link from "next/link";
import Image from "next/image";
import { useParams } from "next/navigation";

import {
  Box,
  Button,
  Container,
  Divider,
  Stack,
  Tab,
  Typography,
} from "@mui/material";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import TabContext from "@mui/lab/TabContext";

import { TOURS, ToursType } from "@/components/UltimateTravel/moc";

import { CostItem, UltimateServiceStyle } from "@/feature/ultimateServer.style";

const UltimateService = () => {
  const { id } = useParams<{ id: string }>();
  const tour: ToursType = TOURS.find((item) => item.id === id) as ToursType;

  const { img, title, price, limit } = tour;

  const [value, setValue] = React.useState("1");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <UltimateServiceStyle>
      <Container maxWidth="xl">
        <Typography variant="h5" fontWeight={700}>
          {title}
        </Typography>
        <Stack direction="row" mt={3} gap={2}>
          <Box>
            <Image src={img} alt={title} width={1050} height={580} />
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
                      <Typography variant="h5" fontWeight="bold">
                        Day 1: Arrival in Tashkent
                      </Typography>
                      <ul>
                        <li>Khast Imam Complexb</li>
                        <li>Chorsu Bazaar</li>
                        <li>Kukeldash Madrasah</li>
                        <li>Amir Timur Square</li>
                        <li>Independence Square</li>
                        <li>Tashkent Metro (most beautiful stations)</li>
                        <li> Museum of Applied </li>
                      </ul>
                      <Typography variant="h5" fontWeight="bold">
                        Arts Day 2 – Amirsay (Ski Resort)
                      </Typography>
                      <ul>
                        <li>
                          Amirsay Ski Resort (skiing, snowboarding, cable car
                          ride)
                        </li>
                        <li>Chimgan Mountains(optional)</li>
                        <li>Kukeldash Madrasah</li>
                        <li>Charvak Reservoir (optional, depends on season)</li>
                      </ul>
                      <Typography variant="h5" fontWeight="bold">
                        Day 3: Arrival in Samarkhand
                      </Typography>
                      <ul>
                        <li>Registan Square</li>
                        <li>Gur-e-Amir Mausoleum</li>
                        <li>Bibi-Khanym Mosque</li>
                        <li>Siyob Bazaar</li>
                        <li>Shah-i-Zinda Necropoli</li>
                        <li>Ulugh Beg Observatory</li>
                      </ul>
                      <Typography variant="h5" fontWeight="bold">
                        Day 4 – Samarkand (continued)
                      </Typography>
                      <ul>
                        <li>Afrosiyab Museum & Ancient Settlement</li>
                        <li>Hazrat Khizr Mosque</li>
                        <li>Mausoleum of Saint Daniel</li>
                        <li> Konigil Paper Mill (traditional paper-making)</li>
                        <li>Wine tasting at Khovrenko Winery (optional)</li>
                      </ul>
                      <Typography variant="h5" fontWeight="bold">
                        Day 5 – Bukhara
                      </Typography>
                      <ul>
                        <li>Lyab-i Hauz Ensemble</li>
                        <li>Nadir Divan-Begi Madrasah</li>
                        <li>Magoki-Attori Mosque</li>
                        <li>
                          Trade Domes (Toki Sarrafon, Toki Zargaron, Toki Telpak
                          Furushon)
                        </li>
                        <li> Kalyan Minaret & Mosque</li>
                        <li>Mir-i-Arab Madrasah</li>
                      </ul>
                      <Typography variant="h5" fontWeight="bold">
                        Day 6 – Bukhara (continued)
                      </Typography>
                      <ul>
                        <li>Ark Fortress</li>
                        <li>Bolo Haouz Mosque</li>
                        <li>Samanid Mausoleum</li>
                        <li>Chashma Ayub Mausoleum</li>
                        <li>Chor Minor</li>
                        <li>
                          Sitora-i Mokhi Khosa (Summer Palace of the Emir)
                        </li>
                        <li>Chor Minor</li>
                        <li>
                          Sitora-i Mokhi Khosa (Summer Palace of the Emir)
                        </li>
                      </ul>
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
          <Box sx={{ maxWidth: "400px", width: "100%" }}>
            <CostItem>
              <Typography variant="h1" margin={"0 0 10px 0"}>
                {price}
              </Typography>
              <Typography variant="body1">Duration: {limit}</Typography>
              <Divider sx={{ margin: "20px 0" }} />
              <Link href="/contact" className="link">
                <Button
                  variant="contained"
                  sx={{ marginTop: "20px" }}
                  fullWidth
                >
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

export default UltimateService;
