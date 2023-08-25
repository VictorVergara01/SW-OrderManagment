import React from 'react';

const LandingPage = () => {
    const handleLogout = () => {
        // Eliminar el token almacenado en localStorage u otra ubicación
        localStorage.removeItem('token'); // Cambia 'tuToken' al nombre real del token

        // Redirigir a la página de inicio de sesión
        window.location.href = '/login';
    };

    return (
        <div>
            <h2>Página de inicio</h2>
            <button onClick={handleLogout}>Cerrar Sesión</button>
        </div>
    );
};

export default LandingPage;
