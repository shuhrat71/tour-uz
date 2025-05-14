import { Groups } from "@mui/icons-material";
import { Stack, SvgIconTypeMap, Typography } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import React from "react";

type Props = {
  Icon: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
  amount: string;
  title: string;
};

const StatsCard = ({ Icon, amount, title }: Props) => {
  return (
    <Stack direction="row" alignItems="center" gap={2}>
      <Icon
        sx={{
          fontSize: 50,
          color: "#68ae49",
        }}
      />
      <Stack textAlign="center">
        <Typography variant="h4" fontWeight={700}>
          {amount}
        </Typography>
        <Typography variant="body1" color="textSecondary">
          {title}
        </Typography>
      </Stack>
    </Stack>
  );
};

export default StatsCard;
