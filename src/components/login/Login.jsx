import React from 'react';
import './login.css';
import logo from '../../asset/logo.svg';

const Login = () => {
  return (
    <div className='icode__navbar-links'>
        <div className='icode__navbar_logo'>
            <img src={logo} alt='logo'/>
        </div>
    </div>
  )
}

export default Login