import React from 'react';
import { Container, Typography } from '@mui/material';

const Stats = () => {
    const handleImageClick = () => {
        // Handle the image click event here
        console.log('Image clicked');
    };

    return (
        <Container
            maxWidth="md"
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100vh',
                padding: 2,
            }}
        >
            <Typography variant="h2" gutterBottom style={{marginBottom:75}}>
                Stats
            </Typography>
            <div
                onClick={handleImageClick}
                style={{
                    backgroundImage: `url(${require('../assets/stats.gif')})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    width: '75%',
                    height: '330px',
                    cursor: 'pointer',
                    borderRadius: '8px',
                    marginBottom: '16px',
                }}
            />
            <Typography variant="body1" sx={{ textAlign: 'center' }}>
                Working on it!
            </Typography>
        </Container>
    );
};

export default Stats;
