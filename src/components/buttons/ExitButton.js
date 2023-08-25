import React from 'react';
import { Button } from '@mui/material';
import ExitImage from '../../assets/exit.png'; // Import the exit image

const ExitButton = () => {
  // Handle the exit action here
  const handleExit = () => {
    // Implement the logic to perform the exit action
    // For example, you can clear localStorage and navigate to the login page
    localStorage.clear();
    window.location.href = '/'; // Change this URL to your login page
  };

  return (
    <Button color="primary" variant="text" onClick={handleExit}>
      <img src={ExitImage} alt="Exit" style={{ width: '24px', height: '24px' }} /> {/* Image */}
    </Button>
  );
};

export default ExitButton;
