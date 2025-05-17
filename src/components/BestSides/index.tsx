"use client";
import React from "react";

import { Box, Stack, SvgIconTypeMap, Typography } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";

import { BestSideStyle } from "./BestSides.style";

type Props = {
  title: string;
  color: string;
  bgColor: string;
  subtitle: string;
  Icon: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
};

const BestSide = ({ Icon, title, subtitle, color, bgColor }: Props) => {
  return (
    <BestSideStyle>
      <Stack
        gap={3}
        alignItems="center"
        className="bestSide"
        direction={{ xs: "column", sm: "row" }}
      >
        <Icon
          className="icon"
          sx={{ color: color, backgroundColor: bgColor }}
        />
        <Box className="informations">
          <Typography variant="h6" fontWeight={700}>
            {title}
          </Typography>
          <Typography variant="body1" color="textSecondary">
            {subtitle}
          </Typography>
        </Box>
      </Stack>
    </BestSideStyle>
  );
};

export default BestSide;
