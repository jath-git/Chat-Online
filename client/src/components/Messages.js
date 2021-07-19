import React from 'react';
import ScrollToBottom from 'react-scroll-to-bottom';
import Message from './Message';

import './Messages.css';

const Messages = ({ messages, name }) => (
  <ScrollToBottom className="box">
    {messages.map((message, i) => <div key={i}><Message name={name} message={message} /></div>)}
  </ScrollToBottom>
);

export default Messages;