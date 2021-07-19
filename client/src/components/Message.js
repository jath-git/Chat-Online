import React from 'react';
import ScrollToBottom from 'react-scroll-to-bottom';
import './Message.css';

const Message = ({ message: { user, text }, name }) => {
    let isSent = false;
    const trimmedName = name.trim().toLowerCase();
    if (user === trimmedName) {
        isSent = true;
    }

    return (
        isSent
            ? (<div className="messageContainer justifyEnd">
                <p className="sentText">{trimmedName}</p>
                <div className="messageBox backgroundBlue">
                    <p className="messageText colourWhite">{text}</p>
                </div>
            </div>)
            : (<div className="messageContainer justifyStart">
                <div className="messageBox backgroundLight">
                    <p className="messageText colourDark">{text}</p>
                </div>
                <p className="sentText pl-10">{trimmedName}</p>
            </div>)
    )
}

export default Message;