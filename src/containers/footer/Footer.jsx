import React from 'react';
import './footer.css'
import logofooter from '../../asset/logofooter.svg';
import qrcode from '../../asset/qrcode.png';
import publicaccount from '../../asset/publicaccount.png'

const Footer = () => {
    return (
        <div className='icode__footer section__padding'>
            <div className='icode__footer-logo'>
                <img src={logofooter} alt="logofooter" />
            </div>

            <div className='icode__footer-links'>
                <div className='icode__footer-links__adress'>
                    <h4>联系方式</h4>
                    <p>地址：浙江省杭州市滨江区长河街道滨文路200号</p>
                    <p>邮箱：liuying@icodeonline.com</p>
                    <p>工作时间：周一~周日 09:00~22:00</p>
                </div>

                <div className='icode__footer-links__qrcode'>
                    <h4>友情链接</h4>
                    <div className='icode__footer-lins__qrcode_container'>
                        <img src={qrcode} alt="qrcode" />                    
                        <img src={publicaccount} alt="publicaccount" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer