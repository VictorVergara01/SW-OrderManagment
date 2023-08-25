import React, { useState, useEffect } from 'react';
import { Paper, Typography } from '@mui/material';

const ItemHeader = ({ idSolicitud }) => {
  const [details, setDetails] = useState(null);

  useEffect(() => {
      if (idSolicitud) {
          // Fetch the delivery details using the provided idSolicitud
          fetch(`http://localhost:5000/api/admin/detalles-entrega/${idSolicitud}`)
              .then(response => response.json())
              .then(data => {
                  setDetails(data);
              })
              .catch(error => {
                  console.error(error);
              });
      }
  }, [idSolicitud]);

  if (!details) {
      return <Typography>Loading details...</Typography>;
  }
  
  return (
    <Paper
      sx={{
        padding: '10px',
        borderRadius: 6,
        backgroundColor: '#c5e1a5',
        width: '100%',
      }}
    >
      <Typography variant="h5" gutterBottom>
        {`Entrega #${idSolicitud}`}
      </Typography>
    </Paper>
  );
};

export default ItemHeader;
