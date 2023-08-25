import { Fab } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';
import RequestForm from '../RequestForm'; // Importa el componente del formulario de solicitud


const FloatingButton = () => {
    const [open, setOpen] = useState(false);
    


    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <Fab
                color="primary"
                aria-label="add"
                style={{
                    backgroundColor: '#98134F',
                    position: 'fixed',
                    bottom: '75px',
                    right: '25px',
                }}
                onClick={handleOpen}
            >
                <AddIcon />
            </Fab>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Crear Nueva Solicitud</DialogTitle>
                <DialogContent>
                    <RequestForm onClose={handleClose} />                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancelar
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
};

export default FloatingButton;