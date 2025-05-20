import React from "react";

import { Stack, SvgIconTypeMap, Typography } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";

import { StatsCardStyle } from "./StatsCard.style";

type Props = {
  title: string;
  amount: string;
  Icon: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
};

const StatsCard = ({ Icon, amount, title }: Props) => {
  return (
    <StatsCardStyle>
      <Stack direction="row" alignItems="center" gap={2}>
        <Icon
          sx={{
            color: "#68ae49",
            fontSize: { xs: 40, sm: 30, md: 50 },
          }}
        />
        <Stack textAlign="center">
          <Typography className="amount">{amount}</Typography>
          <Typography color="textSecondary" className="title">
            {title}
          </Typography>
        </Stack>
      </Stack>
    </StatsCardStyle>
  );
};

export default StatsCard;
