import React from 'react';
import { Container } from '@mui/material';
import BottomMenu from '../components/nav/BottomMenu';
import TopContainer from '../components/containers/TopContainer'; // Import the TopContainer component
import ContentContainer from '../components/containers/ContentContainer'; // Import the ContentContainer component
import FilerContainer from '../components/containers/FilterContainer';
import TitlePage from '../components/TitlePage';
import FloatButton from "../components/buttons/FloatButton";

const Requests = () => {
    const handleAddClick = () => {
        // Handle the add button click here
    };

    const userRole = 'seller'; // Replace this with the actual user's role

    return (
        <Container maxWidth="sm" sx={{ padding: 2 }}>
            {/* Top Container */}
            <TopContainer />

            {/* Title Page Container */}
            <TitlePage title={'Solicitudes'}/>

            {/* Filter Container */}
            <FilerContainer page={'RequestView'}/>

            {/* Scrollable Content Container */}
            <div style={{ maxHeight: 'calc(100vh - 350px)', overflowY: 'auto', padding: '10px' }}>
                <ContentContainer />

                {userRole === 'seller' && <FloatButton onClick={handleAddClick} />}

            </div>

            {/* BottomMenu */}
            <BottomMenu selectedRoute="/deliveries" />
        </Container>
    );
};

export default Requests;