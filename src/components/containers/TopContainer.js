import React from 'react';
import { Box } from '@mui/material';
import AccountButton from '../buttons/AccountButton';
import ExitButton from '../buttons/ExitButton';
import Logo from '../../assets/logo.svg';

const TopContainer = () => {
  return (
    <Box
      sx={{
        blockSize: 'auto',
        mb: 2,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      {/* Account Button */}
      <AccountButton />

      {/* Logo */}
      <img src={Logo} alt="Logo" style={{ height: '60px', width: 'auto' }} />

      {/* Exit Button */}
      <ExitButton />
    </Box>
  );
};

export default TopContainer;
