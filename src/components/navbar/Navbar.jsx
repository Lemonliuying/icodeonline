import React from 'react';
import { Link } from 'react-router-dom';
import {RiMenu3Line, RiCloseLin} from 'react-icons/ri';
import logo from '../../asset/logo.svg';
import './navbar.css';


const Navbar = () => {
  return (
    <div className='icode__navbar'>
        <div className='icode__navbar-links'>
            <div className='icode__navbar_logo'>
                <img src={logo} alt='logo'/>
            </div>
            <div className='icode__navbar-links-containers'>
                <p><a>首页</a></p>
                <p><a>AI·编程</a></p>
                <p><a>遇见</a></p>
                <p><a>AI学院</a></p>
                <p><a>联系我们</a></p>
            </div>

            <div className='icode__navbar-signgroup'>
                <p><a href='/Login'>注册</a></p>
                <Link to='../component/login/Login.jsx'>
                <button type='button'>免费试听</button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Navbar