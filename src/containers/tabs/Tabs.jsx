import React, { useState } from 'react';  
import './tabs.css';  
import ScratchOutline from '../../asset/ScratchOutline.png';
import PythonOutline from '../../asset/PythonOutline.png';
  
const Tabs = () => {  
  const [activeTab, setActiveTab] = useState('Scratch');  
  const [isClicked, setIsClicked] = useState(false);  
  
  const handleTabClick = (icode__tab) => {  
    setActiveTab(icode__tab);  
    setIsClicked(!isClicked);  
  };  
  
  return (  
    <div className="icode__tabs section__padding">
        <div className='icode__tabs-title'>
            <h3 className='gradient__text'>课程体系</h3>
        </div>
        <div className="icode__tabs-list">  
            <div className="icode__tab" onClick={() => handleTabClick('Scratch')}>Scratch</div>  
            <div className="icode__tab" onClick={() => handleTabClick('Python')}>Python</div>  
            <div className="icode__tab" onClick={() => handleTabClick('C++')}>C++</div>  
        </div>  
        <div className="icode__tab-content">  
            {activeTab === 'Scratch' && <img src={ScratchOutline} alt="Scratch" />}  
            {activeTab === 'Python' && <img src={PythonOutline} alt="Python" />}  
            {activeTab === 'C++' && <img src={PythonOutline} alt="C++" />}  
        </div>  
    </div>  
  );  
};  
  
export default Tabs;