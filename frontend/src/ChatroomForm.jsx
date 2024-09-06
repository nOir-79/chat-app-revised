// components/ChatroomForm.js
import React from 'react';

const ChatroomForm = ({ chatroom, onChatroomChange, onJoinChatroom }) => (
  <form onSubmit={onJoinChatroom} className="flex space-x-4 mb-4">
    <input
      type="text"
      placeholder="Enter chatroom name"
      value={chatroom}
      onChange={onChatroomChange}
      className="p-2 border rounded flex-grow"
    />
    <button
      type="submit"
      className="p-2 bg-blue-500 text-white rounded"
    >
      Join Chatroom
    </button>
  </form>
);

export default ChatroomForm;
