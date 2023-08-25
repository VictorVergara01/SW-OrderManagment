import React, { useState } from 'react';
import { Container, Typography, TextField, Button, FormControlLabel, Checkbox } from '@mui/material';


const RequestForm = ({ onClose }) => {
    const [formData, setFormData] = useState({
        idSolicitante: '', // Obtiene automáticamente el ID del usuario
        fecha_entrega: '',
        lugar: '',
        nombre_recibe: '',
        telefono_recibe: '',
        cantidad_tanques: '',
        cantidad_galones: '',
        cantidad_cuartos: '',
        cantidad_otros: '',
        cliente_credito: '',
        origen_producto: '',
        preparacion: '',
        Estado: ''
    });

    const handleChange = (event) => {
        const { name, value, type, checked } = event.target;

        // Maneja los casos especiales de los checkboxes y convierte a 1 o 0
        const newValue = type === 'checkbox' ? (checked ? 1 : 0) : value;

        setFormData({
            ...formData,
            [name]: newValue
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch('http://localhost:5000/api/vendedor/crear-solicitud', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                // La solicitud se creó exitosamente, cierra el modal
                onClose();
            } else {
                // Handle error
                console.error('Error al crear la solicitud');
            }
        } catch (error) {
            console.error(error);
        }
    };

    

    return (
        <form onSubmit={handleSubmit}>
            <Container maxWidth="sm">
                <Typography variant="h6" gutterBottom>
                    Agregar nueva solicitud
                </Typography>
                <TextField
                    label="idSolicitante"
                    name="idSolicitante"
                    value={formData.idSolicitante}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Fecha de Entrega"
                    name="fecha_entrega"
                    type="date"
                    value={formData.fecha_entrega}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <TextField
                    label="Lugar"
                    name="lugar"
                    value={formData.lugar}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Nombre"
                    name="nombre_recibe"
                    value={formData.nombre_recibe}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Telefono"
                    name="telefono_recibe"
                    value={formData.telefono_recibe}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Cantidad Tanques"
                    name="cantidad_tanques"
                    type="number" // Cambio aquí para hacerlo un campo numérico
                    value={formData.cantidad_tanques}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Cantidad Galones"
                    name="cantidad_galones"
                    type="number" // Cambio aquí para hacerlo un campo numérico
                    value={formData.cantidad_galones}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Cantidad Cuartos"
                    name="cantidad_cuartos"
                    type="number" // Cambio aquí para hacerlo un campo numérico
                    value={formData.cantidad_cuartos}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Cantidad Otros"
                    name="cantidad_otros"
                    type="number" // Cambio aquí para hacerlo un campo numérico
                    value={formData.cantidad_otros}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                />
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={formData.preparacion}
                            onChange={handleChange}
                            name="preparacion"
                            color="primary"
                            type="checkbox"
                        />
                    }
                    label="Preparación"
                    fullWidth
                    margin="normal"
                />
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={formData.cliente_credito}
                            onChange={handleChange}
                            name="cliente_credito"
                            color="primary"
                            type="checkbox"
                        />
                    }
                    label="Crédito"
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Origen"
                    name="origen_producto"
                    value={formData.origen_producto}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                />
                
                <Button type="submit" variant="contained" color="primary" style={{ marginRight: '8px' }}>
                    Enviar
                </Button>
                <Button onClick={onClose} variant="contained">
                    Cancelar
                </Button>
            </Container>
        </form>
    );
};

export default RequestForm;
