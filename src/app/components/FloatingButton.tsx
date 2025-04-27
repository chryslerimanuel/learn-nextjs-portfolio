'use client'

import React, { useState } from 'react';

const FloatingButton: React.FC = () => {
  const [label, setLabel] = useState("Click Me!");
  
  const handleClick = () => {
    const randomMessages = ["Beuh!", "Anjayy!", "Eeaa!", "Hemm..", "Hi!"];
    const randomMessage = randomMessages[Math.floor(Math.random() * randomMessages.length)];
    setLabel(randomMessage);
  };

  return (
    <div
      className="fixed bottom-5 right-5 bg-blue-500 text-white py-2 px-4 rounded-full shadow-lg hover:translate-y-[-5px] transform transition-all duration-300 cursor-pointer"
      onClick={handleClick} // On click, change the label
    >
      <span className="animate-bounce">{label}</span>
    </div>
  );
};

export default FloatingButton;
