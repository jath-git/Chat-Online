import React from 'react';

import closeIcon from '../images/close.png';
import './InfoBar.css';


const InfoBar = ({ room }) => (
    <div className="infoBarOuter">
        <table>
            <tr>
                <td className="left-cell">
                    <h3>{room}</h3>
                </td>
                <td className="right-cell">
                    <a href="/"><img src={closeIcon} alt="close image" height="20px" /></a>
                </td>
            </tr>
        </table>
    </div>
)

export default InfoBar;