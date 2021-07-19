import React from 'react';

import closeIcon from '../icons/close.png';
import './InfoBar.css';

const InfoBar = ({ room }) => (
  <div className="infoBar">
    <div className="leftCell">
      <h3>{room}</h3>
    </div>
    <div className="rightCell">
      <a href="/"><img src={closeIcon} alt="close" /></a>
    </div>
  </div>
);

export default InfoBar;