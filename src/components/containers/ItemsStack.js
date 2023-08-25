import React, { useState, useEffect } from 'react';
import { Stack, Paper, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const ItemsStack = ({ onItemClick }) => {
  const [solicitudes, setSolicitudes] = useState([]);

  useEffect(() => {
    // Fetch the data from the API endpoint /api/admin/solicitudes
    fetch('http://localhost:5000/api/admin/solicitudes')
      .then(response => response.json())
      .then(data => {
        setSolicitudes(data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <Stack spacing={2} style={{ padding: '10px' }}>
      {solicitudes.map((solicitud) => (
        <Paper
          key={solicitud.idSolicitud}
          elevation={3}
          sx={{
            borderRadius: 6,
            backgroundColor: '#efe8e8',
            minHeight: 80,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
          }}
          onClick={() => onItemClick(solicitud.idSolicitud)}
        >
          <RouterLink
            to={`/delivery-view/${solicitud.idSolicitud}`}
            style={{ textDecoration: 'none', width: '100%' }}
          >
            <Typography
              variant="body1"
              sx={{ fontWeight: 'bold', textDecoration: 'none', color: 'inherit' }}
            >
              {`Entrega #${solicitud.idSolicitud}`}
            </Typography>
          </RouterLink>
        </Paper>
      ))}
    </Stack>
  );
};

export default ItemsStack;
