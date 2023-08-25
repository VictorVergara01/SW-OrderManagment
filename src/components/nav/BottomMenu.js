
import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { useLocation, useNavigate } from 'react-router-dom';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import NavButton from '../buttons/NavButton';
import btn1 from '../../assets/deliveries_button.png';
import btn2 from '../../assets/requests_button.png';
import btn3 from '../../assets/stats_button.png';
import btn4 from '../../assets/settings_button.png';

const StyledNavigationAction = styled(BottomNavigationAction)`
  &.Mui-selected {
    background-color: #98134f; /* Pink color */
    color: white;
  }

  background-color: black; /* Default background color */
`;

const BottomMenu = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [selectedRoute, setSelectedRoute] = useState('/deliveries');

  useEffect(() => {
    const routeFromURL = new URLSearchParams(location.search).get('route');
    if (routeFromURL) {
      setSelectedRoute(routeFromURL);
    }
  }, [location]);

  const handleNavigation = (newValue) => {
    setSelectedRoute(newValue);
    navigate(newValue, { state: { route: newValue } });
  };

  return (
    <BottomNavigation
      value={selectedRoute}
      onChange={(event, newValue) => {
        handleNavigation(newValue);
      }}
      showLabels
      style={{ position: 'fixed', bottom: 0, width: '100%' }}
    >
      <StyledNavigationAction
        icon={<NavButton route={'/deliveries'} icon={btn1} />}
        value="/deliveries"
        showLabel
      />
      <StyledNavigationAction
        icon={<NavButton route={'/requests'} icon={btn2} />}
        value="/requests"
        showLabel
      />
      <StyledNavigationAction
        icon={<NavButton route={'/stats'} icon={btn3} />}
        value="/stats"
        showLabel
      />
      <StyledNavigationAction
        icon={<NavButton route={'/settings'} icon={btn4} />}
        value="/settings"
        showLabel
      />
    </BottomNavigation>
  );
};

export default BottomMenu;
