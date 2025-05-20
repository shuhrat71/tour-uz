"use client";
import { useEffect, useState } from "react";

import {
  Box,
  Divider,
  Container,
  Typography,
  CircularProgress,
} from "@mui/material";

import { DataType, getDocuments } from "@/mocs";

import { ClienstImages, Clients__wrapper, SatisfiedClients } from "./style";

function HappyClientsPage() {
  const [happyClientData, setHappyClientData] = useState<DataType[] | null>(
    null
  );
  const [satisfiedClients, setSatisfiedClients] = useState<DataType[] | null>(
    null
  );
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getDocuments("HappyClient", setHappyClientData);
    getDocuments("SatisfiedClients", setSatisfiedClients);
    setLoading(false);
  }, []);

  if (loading)
    return (
      <Box
        sx={{
          display: "flex",
          height: "70vh",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <CircularProgress />
      </Box>
    );
  return (
    <Container maxWidth="xl">
      <Clients__wrapper>
        <ClienstImages>
          {satisfiedClients?.map((item, index) => (
            <Box>
              <img
                loading="lazy"
                src={item.img}
                alt={item.title}
                style={{ width: "100%", height: "auto" }}
              />
              <Typography variant="h1">{item.title}</Typography>
              <p>{item.description}</p>

              {index !== satisfiedClients.length - 1 && (
                <Box style={{ display: "none", height: 0, margin: 0 }}></Box>
              )}
              <Divider />
            </Box>
          ))}
        </ClienstImages>
        <SatisfiedClients>
          {happyClientData?.slice(1).map((item1) => (
            <Box>
              <img
                loading="lazy"
                src={item1.img}
                style={{ width: "100%", height: "auto" }}
              />
              <h1>{item1.title}</h1>
              <Divider
                sx={{
                  marginTop: "20px",
                  marginBottom: "20px",
                }}
              />
            </Box>
          ))}
        </SatisfiedClients>
      </Clients__wrapper>
    </Container>
  );
}
export default HappyClientsPage;
