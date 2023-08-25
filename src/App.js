import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/login/Login';
import LandingPage from './pages/LandingPage';
import './App.css';
import BottomMenu from './components/nav/BottomMenu'; // Import the modified BottomMenu component
import Deliveries from './pages/Deliveries';
import Requests from './pages/Requests';
import Stats from './pages/Stats';
import Settings from './pages/Settings';
import DeliveryView from "./pages/common/DeliveryView";
import Account from "./pages/Account";
const App = () => {
    const [loggedIn, setLoggedIn] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            setLoggedIn(true);
        }
    }, []);

    return (
        <Router>
            <Routes>
                <Route exact path="/" element={loggedIn ? <Navigate to="/landing" /> : <Login setLoggedIn={setLoggedIn} />}
                />
                <Route path="/landing" element={loggedIn ? (<><LandingPage setLoggedIn={setLoggedIn} />
                                <BottomMenu selectedRoute="/landing" /> {/* Pass selected route */}</>
                        ) : (
                            <Navigate to="/" />)}
                />
                <Route path="/deliveries" element={loggedIn ? (<><Deliveries setLoggedIn={setLoggedIn} />
                                <BottomMenu selectedRoute="/deliveries" /> {/* Pass selected route */}</>
                        ) : (
                            <Navigate to="/" />)}
                />
                <Route path="/requests" element={loggedIn ? (<><Requests setLoggedIn={setLoggedIn} />
                                <BottomMenu selectedRoute="/requests" /> {/* Pass selected route */}</>
                        ) : (
                            <Navigate to="/" />)}
                />
                <Route path="/stats" element={loggedIn ? (<><Stats setLoggedIn={setLoggedIn} />
                                <BottomMenu selectedRoute="/stats" /> {/* Pass selected route */}</>
                        ) : (
                            <Navigate to="/" />)}
                />
                <Route path="/settings" element={loggedIn ? (<><Settings setLoggedIn={setLoggedIn} />
                                <BottomMenu selectedRoute="/settings" /> {/* Pass selected route */}</>
                        ) : (
                            <Navigate to="/" />)}
                />
                <Route path="/delivery-view/:itemId" element={loggedIn ? (<><DeliveryView setLoggedIn={setLoggedIn} />
                                <BottomMenu selectedRoute="/delivery-view/:itemId" /> {/* Pass selected route */}</>
                        ) : (
                            <Navigate to="/" />)}
                />
                <Route path="/account" element={loggedIn ? (<><Account setLoggedIn={setLoggedIn} />
                                <BottomMenu selectedRoute="/account" /> {/* Pass selected route */}</>
                        ) : (
                            <Navigate to="/" />)}
                />
            </Routes>
            {/* Place the BottomMenu component here outside the Routes */}
            {/*{loggedIn && <BottomMenu />} ///////////////////////////////////// PROBLEM HERE ///////////////////////////////////////////////*/}
            <BottomMenu/>
        </Router>
    );
};

export default App;
