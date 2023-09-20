import React from 'react';
import './header.css';
import header from '../../asset/header.png'

const Header = () => {
  return (
    <div className='icode__header section__padding'>
        <div className='icode__header-bg'>
            <div className='icode__header-bg_pic'>
                <img src={header} alt='header'/>
            </div>
        </div>
    </div>
  )
}

export default Header