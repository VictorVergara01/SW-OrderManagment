import React from 'react';
import {Container} from "@mui/material";
import TopContainer from "../../components/containers/TopContainer";
import TitlePage from "../../components/TitlePage";
import ItemDetailsContainer from "../../components/containers/ItemDetailsContainer";
import ActionsContainer from "../../components/containers/ActionsContainer";
import BottomMenu from "../../components/nav/BottomMenu";
import { useParams } from 'react-router-dom';

const DeliveryView = () => {
  const { itemId } = useParams();
  // const { deliveryId } = useParams(); // Get the delivery ID from URL parameter

  // Fetch and display delivery details based on the deliveryId
  return (
    <div>
        <Container maxWidth="sm" sx={{ padding: 2 }}>
            {/* Top Container */}
            <TopContainer />

            {/* Title Page Container */}
            <TitlePage title={`Detalles de la Entrega #${itemId}`} />


            {/* Scrollable Content Container */}
            <ItemDetailsContainer itemId={itemId} />

            {/* Actions Container */}
            <ActionsContainer />

            {/* BottomMenu */}
            <BottomMenu selectedRoute="/deliveries" />
        </Container>
    </div>
  );
};

export default DeliveryView;
