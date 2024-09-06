import React from 'react';

const MessageList = ({ messages }) => (
  <div className="flex-1 overflow-auto bg-white p-4 border rounded mb-4">
    {messages.map((msg, index) => (
      <div key={index} className="mb-2 p-2 border-b">
        <strong>{msg.user}:</strong> {msg.text}
      </div>
    ))}
  </div>
);

export default MessageList;