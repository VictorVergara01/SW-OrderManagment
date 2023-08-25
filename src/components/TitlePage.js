import React from 'react';
import { Typography } from '@mui/material';

const TitlePage = ({ title }) => {
  return (
    <Typography variant="h1" sx={{ fontSize: 30, marginBottom: 5, marginTop:5 }}>
      {title}
    </Typography>
  );
};

export default TitlePage;
