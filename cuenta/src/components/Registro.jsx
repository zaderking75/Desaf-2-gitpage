import React from 'react';
import SocialButton from './SocialButto';
import Formulario from './Formulario';
import Alert from './Alert';

const Registro = () => {
    return (
        <div className='container'>
            <div className='borde'>
            <h1>Crea una Cuenta</h1>
            <div className='a'>
            <SocialButton/>

            </div>
            <Formulario />
            <Alert/>
            </div>
        </div>
    );
};

export default Registro;