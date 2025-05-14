import { HealthAndSafety } from "@mui/icons-material";
import { Stack, SvgIconTypeMap, Typography } from "@mui/material";
import React from "react";
import { GoodSideStyle } from "./goodSide.style";
import { OverridableComponent } from "@mui/material/OverridableComponent";

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
