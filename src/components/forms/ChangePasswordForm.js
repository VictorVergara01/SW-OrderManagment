import React, { useState } from 'react';
import { Box, TextField, Button } from '@mui/material';

const ChangePasswordForm = () => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const handleCurrentPasswordChange = (e) => {
    setCurrentPassword(e.target.value);
  };

  const handleNewPasswordChange = (e) => {
    setNewPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to update the password (e.g., API call)
    // Reset the form fields
    setCurrentPassword('');
    setNewPassword('');
  };

  return (
      <Box>
        <form onSubmit={handleSubmit}>
          <TextField
              type="password"
              label="Current Password"
              value={currentPassword}
              onChange={handleCurrentPasswordChange}
              fullWidth
              margin="normal"
              variant="outlined" // Add variant
          />
          <TextField
              type="password"
              label="New Password"
              value={newPassword}
              onChange={handleNewPasswordChange}
              fullWidth
              margin="normal"
              variant="outlined" // Add variant
          />

          <Button type="submit" variant="contained" color="primary" style={{backgroundColor:'#98134F'}}>
            Change Password
          </Button>
        </form>
      </Box>
  );
};

export default ChangePasswordForm;
