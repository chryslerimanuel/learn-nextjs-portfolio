'use client'

import React, { useState } from 'react';
import Chatbot from './Chatbot'; 

const FloatingButton: React.FC = () => {
  const [showChatbot, setShowChatbot] = useState(false);

  const handleClick = () => {
    setShowChatbot(!showChatbot); 
  };

  return (
    <div>
      {/* Floating button */}
      <div
        className="fixed bottom-5 right-5 bg-blue-500 text-white py-2 px-4 rounded-full shadow-lg hover:translate-y-[-5px] transform transition-all duration-300 cursor-pointer"
        onClick={handleClick}
      >
        Chat
      </div>

      {/* Show the chatbot component when clicked */}
      {showChatbot && <Chatbot closeChat={() => setShowChatbot(false)} />}
    </div>
  );
};

export default FloatingButton;
