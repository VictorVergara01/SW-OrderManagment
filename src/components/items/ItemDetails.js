import React, { useState, useEffect } from 'react';
import { Paper, Typography } from '@mui/material';

const ItemDetails = ({ idSolicitud }) => {
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
console.log(details)
    return (
        <Paper
            sx={{
                borderRadius: 6,
                padding: 2,
                backgroundColor: '#efe8e8',
            }}
        >
            <Typography variant="body1" gutterBottom>
                {details.description}
            </Typography>
            <Typography variant="body1" gutterBottom>
                Vendedor: {details.solicitante.nombre} {details.solicitante.apellido}
            </Typography>
            <Typography variant="body1" gutterBottom>
                Cliente: {details.solicitud.cliente}
            </Typography>
            <Typography variant="body1" gutterBottom>
                Tanques: {details.solicitud.tanques}
            </Typography>
            <Typography variant="body1" gutterBottom>
                Galones: {details.solicitud.galones}
            </Typography>
            <Typography variant="body1" gutterBottom>
                Direccion: {details.lugar}
            </Typography>
            <Typography variant="body1" gutterBottom>
                Origen: {details.solicitud.tienda}
            </Typography>
            <Typography variant="body1" gutterBottom>
                Monto: <strong style={{ color: 'green' }}>{details.monto}</strong>
            </Typography>
            <Typography variant="body1" gutterBottom>
                Estado: {details.estado}
            </Typography>
        </Paper>
    );
};

export default ItemDetails;
