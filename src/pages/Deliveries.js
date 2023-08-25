import React from 'react';
import { Container } from '@mui/material';
import BottomMenu from '../components/nav/BottomMenu';
import TopContainer from '../components/containers/TopContainer'; // Import the TopContainer component
import ContentContainer from '../components/containers/ContentContainer'; // Import the ContentContainer component
// import ActionsContainer from '../components/containers/ActionsContainer'; // Import the ActionsContainer component
import FilerContainer from '../components/containers/FilterContainer';
import TitlePage from '../components/TitlePage';

const Deliveries = () => {
    return (
        <Container maxWidth="sm" sx={{ padding: 2 }}>
            {/* Top Container */}
            <TopContainer />

            {/* Title Page Container */}
            <TitlePage title={'Entregas'}/>

            {/* Filter Container */}
            <FilerContainer />

            {/* Scrollable Content Container */}
            <div style={{ maxHeight: 'calc(100vh - 350px)', overflowY: 'auto', padding: '10px' }}>
                <ContentContainer />
            </div>

            {/* BottomMenu */}
            <BottomMenu selectedRoute="/deliveries" />
        </Container>
    );
};

export default Deliveries;
