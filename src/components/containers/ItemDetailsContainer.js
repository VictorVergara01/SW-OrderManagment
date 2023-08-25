import React from 'react';
import { Stack } from '@mui/material';
import ItemHeader from '../../components/items/ItemHeader';
import ItemDetails from '../../components/items/ItemDetails';
import ItemLocation from '../../components/items/ItemLocation';

const ItemDetailsContainer = ({ itemId }) => {
  
  const itemDetails = {
    id: itemId,
    title: 'Item Title',
    description: 'This is the description of the item.',
    location: 'Item Location',
  };
  

  return (
    <Stack spacing={2} sx={{ padding: 2 }}>
      <ItemHeader idSolicitud={itemId} />
      <ItemDetails idSolicitud={itemId} />
      <ItemLocation location={itemDetails.location} />
    </Stack>
  );
};

export default ItemDetailsContainer;