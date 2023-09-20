import React, { useState } from 'react';  
import './iconwithtooltip.css'; // 导入样式文件  
  
const IconWithTooltip = ({ icon, tooltip }) => {  
  const [isHovered, setIsHovered] = useState(false);  
  
  return (  
    <div className="icon-container">  
      <i   
        className={`icon ${icon}`}   
        onMouseEnter={() => setIsHovered(true)}   
        onMouseLeave={() => setIsHovered(false)}  
      ></i>  
      {isHovered && <img className="tooltip" src={tooltip} alt="Tooltip"/>}  
    </div>  
  );  
};  
  
export default IconWithTooltip;