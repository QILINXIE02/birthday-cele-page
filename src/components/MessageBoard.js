// MessageBoard.js
import React, { useState, useEffect } from 'react';

const MessageBoard = () => {
  const [messages, setMessages] = useState(() => JSON.parse(localStorage.getItem('messages')) || []);
  const [newMessage, setNewMessage] = useState('');

  const addMessage = () => {
    const updatedMessages = [...messages, newMessage];
    setMessages(updatedMessages);
    setNewMessage('');
    localStorage.setItem('messages', JSON.stringify(updatedMessages));
  };

  return (
    <div>
      <h3>Leave a Message</h3>
      <input 
        value={newMessage}
        onChange={(e) => setNewMessage(e.target.value)}
        placeholder="Write a message..."
      />
      <button onClick={addMessage}>Add Message</button>
      <ul>
        {messages.map((msg, index) => <li key={index}>{msg}</li>)}
      </ul>
    </div>
  );
};

export default MessageBoard;
