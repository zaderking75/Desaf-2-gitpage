import React from 'react';

const Alert = ({ mensaje, tipo }) => {

    const estilo = {
        color: tipo === "danger" ? "red" : tipo === "success" ? "green" : "black"
    };

    return (
        <div style={estilo} role="alert">
            <h3>{mensaje}</h3>
        </div>
    );
};

export default Alert;