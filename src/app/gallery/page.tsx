"use client";
import { useEffect, useState } from "react";

import { Box, CircularProgress, Container } from "@mui/material";

import { DataType, getDocuments } from "@/mocs";

import { GalleryWrapper, ImageCard } from "./style";

const GalleryPage = () => {
  const [galleryData, setGalleryData] = useState<DataType[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    getDocuments("GalleryData", setGalleryData);
    setLoading(!loading);
  }, []);

  console.log(galleryData);

  return (

    <Container maxWidth="xl">
      {loading ? (
        <Box sx={{ display: "flex", justifyContent: "center", mt: 80 }}>
          <CircularProgress />
        </Box>
      ) : (
        <GalleryWrapper>
          {galleryData?.map((item, idx) => (
            <ImageCard key={idx}>
              <img src={item.img} alt={item.title || "image"} loading="lazy" />
            </ImageCard>
          ))}
        </GalleryWrapper>
      )}
    </Container>

  );
};

export default GalleryPage;
