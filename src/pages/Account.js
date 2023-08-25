import React from 'react';
import { Container, Box, Button } from '@mui/material';
import ImageChangeDialog from '../components/dialogs/ImageChangeDialog';
import ChangePasswordForm from '../components/forms/ChangePasswordForm';

const Account = () => {
  const [imageDialogOpen, setImageDialogOpen] = React.useState(false);

  const handleImageDialogOpen = () => {
    setImageDialogOpen(true);
  };

  const handleImageDialogClose = () => {
    setImageDialogOpen(false);
  };

  return (
    <Container maxWidth="sm" sx={{ textAlign: 'center' }}>
      <Box sx={{ mb: 2 }}>
        {/* Button to open image change dialog */}
        <Button
          variant="contained"
          color="primary"
          sx={{ backgroundColor: '#98134F' }}
          onClick={handleImageDialogOpen}
        >
          Change Image
        </Button>
        <ImageChangeDialog open={imageDialogOpen} onClose={handleImageDialogClose} />
      </Box>

      <Box sx={{ mb: 2 }}>
        {/* Include the ChangePasswordForm component */}
        <ChangePasswordForm />
      </Box>
    </Container>
  );
};

export default Account;
