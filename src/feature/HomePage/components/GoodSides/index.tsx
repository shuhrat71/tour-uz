"use client";

import React from "react";

import { SvgIconTypeMap, Typography } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";

import { GoodSideStyle } from "./goodSide.style";

type Props = {
  title: string;
  Icon: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
};

const GoodSide = ({ title, Icon }: Props) => {
  return (
    <GoodSideStyle>
      <Icon className="goodSideIcon" />
      <Typography variant="body1" fontWeight={800}>
        {title}
      </Typography>
    </GoodSideStyle>
  );
};

export default GoodSide;
