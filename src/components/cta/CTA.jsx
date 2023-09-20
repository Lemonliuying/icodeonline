import React from 'react';
import './cta.css';
import classdemo from '../../asset/classdemo.png'

const CTA = () => {
  return (
    <div className='icode__cta section__padding'>
        <div className='icode__cta-groupcontent'>
            <div className='icode__cta-groupcontent__title'>
                <h1>一次给孩子的选择机会</h1>
            </div>
            <div className='icode__cta-groupcontent__name'>
                <p>姓名 </p>
                <input type='name'/>
            </div>
            <div className='icode__cta-groupcontent__telephone'>
                <p>电话</p>
                <input type='telephone' />
            </div>
            <div className='icode__cta-groupcontent__button'>
                <button type='button'>免费试听课程</button>
            </div>
        </div>
        <div className='icode__cta-pic'>
            <img src={classdemo} alt='classdemo'/>
        </div>
    </div>
  )
}

export default CTA