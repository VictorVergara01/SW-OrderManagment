// Registro.js
import React, { useState } from 'react';
import axios from 'axios';

const Registro = () => {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  // Otros campos del formulario

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('http://localhost:5000/api/usuarios', {
        nombre,
        apellido,
        // Otros campos del formulario
      });

      console.log('Usuario registrado exitosamente');
      // Redireccionar a la página de inicio de sesión
    } catch (error) {
      console.error('Error al registrar usuario:', error);
    }
  };

  return (
    <div>
      <h2>Registro de Usuario</h2>
      <form onSubmit={handleSubmit}>
        <label>Nombre:</label>
        <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
        <label>Apellido:</label>
        <input type="text" value={apellido} onChange={(e) => setApellido(e.target.value)} />
        {/* Otros campos del formulario */}
        <button type="submit">Registrarse</button>
      </form>
    </div>
  );
};

export default Registro;
