import React from 'react';
import { ListItemText, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const Item = ({ id, text, onItemClick }) => {
  return (
    <ListItemText
      primary={
        <Link
          component={RouterLink}
          to={`/delivery-view/${id}`}
          color="inherit"
          onClick={() => onItemClick(id)}
        >
          {text}
        </Link>
      }
    />
  );
};

export default Item;
