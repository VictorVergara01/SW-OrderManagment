import React from 'react';
import { Dialog, DialogContent, Button } from '@mui/material';

const ImageChangeDialog = ({ open, onClose }) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogContent>
        {/* Image upload form */}
        <p>Image Upload Form</p>
        {/* Close button */}
        <Button variant="contained" color="primary" onClick={onClose} sx={{ backgroundColor: '#E89417' }}>
          Close
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default ImageChangeDialog;
