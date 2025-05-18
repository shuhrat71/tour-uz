import React from "react";

import { Typography, Box } from "@mui/material";

type TravelDayProps = {
  title: string;
  items: string[];
};

const TravelDay = ({ title, items }: TravelDayProps) => {
  return (
    <Box mb={4} p={0} mx={0}>
      <Typography variant="h5" fontWeight="bold">
        {title}
      </Typography>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </Box>
  );
};

export default TravelDay;
