import React from 'react';
import { IconButton } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import AccountImage from '../../assets/account.png'; // Import the account image

const AccountButton = () => {
  return (
    <IconButton component={RouterLink} to="/account">
      <img src={AccountImage} alt="Account" style={{ width: '24px', height: '24px' }} /> {/* Image */}
    </IconButton>
  );
}

export default AccountButton;
