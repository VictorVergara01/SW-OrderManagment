import React from 'react';
import { Paper, Typography, CardMedia } from '@mui/material';
import mapBannerImage from '../../assets/map_banner.png'; // Import the image

const ItemLocation = () => {
  const defaultLocation = 'UIP, Via Ricardo J Alfaro, Panama'; // Default location

  const encodedLocation = encodeURIComponent(defaultLocation);
  const googleMapsLink = `https://www.google.com/maps/search/?api=1&query=${encodedLocation}`;

  return (
    <a href={googleMapsLink} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
      <Paper
        sx={{
          padding: 2,
          borderRadius: 6,
          position: 'relative', // Position the container
          backgroundColor: 'transparent',
          overflow: 'hidden', // Hide overflow to prevent the image from overflowing
          height: '30%', // Set height to 30% of parent container
        }}
      >
        {/* Location Image */}
        <CardMedia
          component="img"
          alt="Map Banner"
          image={mapBannerImage} // Use the imported image here
          style={{
            width: '100%',
            height: '100%', // Set the height to cover the entire container
            objectFit: 'cover', // Scale the image to cover the container
            borderRadius: '6px', // Apply border radius
          }}
        />

        {/* Location Text */}
        <Typography variant="body1" gutterBottom style={{ marginTop: '8px' }}>
          Location: {defaultLocation}
        </Typography>
      </Paper>
    </a>
  );
};

export default ItemLocation;
