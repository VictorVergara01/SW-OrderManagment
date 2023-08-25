import React from 'react';
import { Box } from '@mui/material';
import ItemsStack from '../containers/ItemsStack'; // Import the updated ItemsStack component
import { useNavigate } from 'react-router-dom';

const ContentContainer = () => {
  const navigate = useNavigate();

  const handleItemClick = (itemId) => {
    navigate(`/delivery-view/${itemId}`);
  };

  return (
    <Box sx={{ mb: 2, overflowY: 'auto' }}>
      {/* Container for ItemsStack */}
      <ItemsStack onItemClick={handleItemClick} />
    </Box>
  );
};

export default ContentContainer;
