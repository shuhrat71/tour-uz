"use client";
import { useEffect, useState } from "react";

import { collection, getDocs } from "firebase/firestore";

import {
  Box,
  Divider,
  Container,
  Typography,
  CircularProgress,
} from "@mui/material";

import { db } from "../../lib/db";

import { ClienstImages, Clients__wrapper, SatisfiedClients } from "./style";

type Props = {};
interface DataItem {
  id: string;
  img: string;
  video: string;
  imgText: string;
  imgName: string;
  imgTitle: string;
  clientsImg: string;
  clentLocation: string;
}
function HappyClientsPage({}: Props) {
  const [data, setData] = useState<DataItem[]>([]);
  const [satisfiedClients, setSatisfiedClients] = useState<DataItem[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "happyClients"));
      const items: DataItem[] = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as DataItem[];
      setData(items);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };
  const satisfiedClientsData = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "satisfiedClients"));
      const items: DataItem[] = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as DataItem[];
      setSatisfiedClients(items);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };
  useEffect(() => {
    fetchData();
    satisfiedClientsData();
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
          {data.map((item, index) => (
            <Box>
              <img
                loading="lazy"
                src={item.img}
                alt={item.imgTitle}
                style={{ width: "100%", height: "auto" }}
              />
              <Typography variant="h1">{item.imgTitle}</Typography>
              <p>{item.imgText}</p>

              {index !== data.length - 1 && ( // Oxirgi elementdan keyin div chiqmasligi uchun
                <Box style={{ display: "none", height: 0, margin: 0 }}></Box>
              )}
              <Divider />
            </Box>
          ))}
        </ClienstImages>
        <SatisfiedClients>
          {satisfiedClients.slice(1).map((item1) => (
            <Box>
              <img
                loading="lazy"
                src={item1.img}
                style={{ width: "100%", height: "auto" }}
              />
              <h1>{item1.imgName}</h1>
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
