"use client";
import React, { useState } from "react";

import {
  Box,
  Accordion,
  Typography,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import { ExpandMore } from "@mui/icons-material";

type Props = {
  img: string;
  name: string;
  description: string;
  index: number;
};

const AccordionCities = ({ img, name, description, index }: Props) => {
  const [expanded, setExpanded] = useState<number | false>(false);

  const handleChange =
    (panel: number) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <Box style={{ borderRadius: 5, backgroundColor: "#fff" }}>
      <img
        src={img}
        alt={name}
        style={{
          width: "100%",
          height: "220px",
          borderRadius: 5,
          objectFit: "cover",
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
          id={`panel${index}-header`}
          aria-controls={`panel${index}-content`}
        >
          <Typography fontWeight="bold">{name}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{description}</Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default AccordionCities;
