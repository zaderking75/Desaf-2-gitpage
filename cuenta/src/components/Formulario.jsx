import React, { useState } from 'react';
import Alert from './Alert'; 

const Formulario = () => {
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [contraseña, setContraseña] = useState('');
    const [confirmarContraseña, setConfirmarContraseña] = useState('');
    const [mensajeError, setMensajeError] = useState('');
    const [error, setError] = useState(false);
    const [registroExitoso, setRegistroExitoso] = useState(false);

    const handlePasswordChange = (e) => {
        setContraseña(e.target.value);
        if (e.target.value !== confirmarContraseña) {
            setMensajeError('Las contraseñas no coinciden');
        } else {
            setMensajeError('');
        }
    };

    const handleConfirmPasswordChange = (e) => {
        setConfirmarContraseña(e.target.value);
        if (e.target.value !== contraseña) {
            setMensajeError('Las contraseñas no coinciden');
        } else {
            setMensajeError('');
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (nombre === '' || email === '' || contraseña === '' || confirmarContraseña === '') {
            setError(true);
            setMensajeError('Todos los campos son obligatorios');
        } else if (contraseña !== confirmarContraseña) {
            setError(true);
            setMensajeError('Las contraseñas no coinciden');
        } else {
            setError(false);
            setMensajeError('');
            setRegistroExitoso(true);
            setTimeout(() => {
                setRegistroExitoso(false);
                setNombre('');
                setEmail('');
                setContraseña('');
                setConfirmarContraseña('');
            }, 2000);
        }
    };

    return (
        <>
            <form className="formulario" onSubmit={handleSubmit}>
                {error && <Alert  mensaje={mensajeError} tipo="danger" />}
                {registroExitoso && <Alert mensaje="Te has registrado con éxito" tipo="success" />}
                <div className="form-group">
                    <input
                        type="text"
                        name="nombre"
                        className="largo"
                        placeholder="Nombre"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                    />
                </div>
                <br />
                <div className="form-group">
                    <input
                        type="email"
                        name="email"
                        className="largo"
                        placeholder="Correo electrónico"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <br />
                <div className="form-group">
                    <input
                        type="password"
                        name="contraseña"
                        className="largo"
                        placeholder="Contraseña"
                        value={contraseña}
                        onChange={handlePasswordChange}
                    />
                </div>
                <br />
                <div className="form-group">
                    <input 
                        type="password"
                        name="confirmarContraseña"
                        className="largo"
                        placeholder="Confirmar contraseña"
                        value={confirmarContraseña}
                        onChange={handleConfirmPasswordChange}
                    />
                </div>
                <br />
                <button type="submit" className=" largo1 b">
                    Registrarse
                </button>
            </form>
        </>
    );
};

export default Formulario;