// components/MessageInput.js
import React from 'react';

const MessageInput = ({ messageInput, onMessageInputChange, onSendMessage }) => (
  <form onSubmit={onSendMessage} className="flex space-x-4">
    <input
      type="text"
      placeholder="Type a message..."
      value={messageInput}
      onChange={onMessageInputChange}
      className="p-2 border rounded flex-grow"
    />
    <button
      type="submit"
      className="p-2 bg-green-500 text-white rounded"
    >
      Send
    </button>
  </form>
);

export default MessageInput;
